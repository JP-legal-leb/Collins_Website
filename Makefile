.PHONY: help install start build watch test clean up down logs restart

.DEFAULT_GOAL := help

DOCKER ?= docker
COMPOSE ?= docker compose
IMAGE_NAME ?= collins-website
NODE_MODULES_VOLUME ?= $(IMAGE_NAME)-node-modules

define DOCKER_NODE
$(DOCKER) run --rm \
	-v "$(CURDIR):/app" \
	-v $(NODE_MODULES_VOLUME):/app/node_modules \
	-w /app \
	$(IMAGE_NAME)-deps
endef

help: ## Show available commands
	@grep -E '^[a-zA-Z0-9_-]+:.*## ' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*## "}; {printf "  \033[36m%-18s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies via Docker
	$(DOCKER) build --target deps -t $(IMAGE_NAME)-deps .
	$(DOCKER_NODE) npm ci

start: install ## Run dev server via Docker (http://localhost:4200)
	$(DOCKER) run --rm -it \
		-p 4200:4200 \
		-v "$(CURDIR):/app" \
		-v $(NODE_MODULES_VOLUME):/app/node_modules \
		-w /app \
		$(IMAGE_NAME)-deps \
		npm start -- --host 0.0.0.0 --poll 2000

build: install ## Build production bundle via Docker
	$(DOCKER_NODE) npm run build

watch: install ## Build in watch mode via Docker
	$(DOCKER) run --rm -it \
		-v "$(CURDIR):/app" \
		-v $(NODE_MODULES_VOLUME):/app/node_modules \
		-w /app \
		$(IMAGE_NAME)-deps \
		npm run watch

test: install ## Run unit tests via Docker
	$(DOCKER_NODE) npm test

clean: install ## Remove build output via Docker
	$(DOCKER_NODE) rm -rf dist .angular

up: ## Build and start production container (http://localhost:8080)
	$(COMPOSE) up --build -d

down: ## Stop and remove containers
	$(COMPOSE) down

logs: ## Tail production container logs
	$(COMPOSE) logs -f

restart: down up ## Rebuild and restart production container
