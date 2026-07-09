import { Directive, ElementRef, inject, input, OnDestroy, OnInit } from '@angular/core';

/**
 * Adds `.is-visible` when the host scrolls into view, driving CSS reveal
 * transitions. Respects prefers-reduced-motion (styles fall back gracefully).
 */
@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  readonly delay = input(0, {
    alias: 'appReveal',
    transform: (value: number | string): number => {
      const n = typeof value === 'number' ? value : Number(value);
      return Number.isFinite(n) ? n : 0;
    },
  });

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const host = this.el.nativeElement as HTMLElement;
    host.setAttribute('data-reveal', '');
    if (this.delay()) {
      host.style.transitionDelay = `${this.delay()}ms`;
    }

    if (typeof IntersectionObserver === 'undefined') {
      host.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Reveal when scrolling in, or if the element is already at/above
          // the viewport (e.g. deep-link jump or reload mid-page).
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            host.classList.add('is-visible');
            this.observer?.unobserve(host);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
