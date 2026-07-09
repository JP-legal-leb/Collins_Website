import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from './reveal.directive';

@Component({
  selector: 'app-cta-band',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RevealDirective],
  template: `
    <section class="cta">
      <div class="container cta__inner" appReveal>
        <div class="cta__text">
          <h2 class="display-2 cta__title">{{ title() }}</h2>
          <p class="lead cta__sub">{{ subtitle() }}</p>
        </div>
        <div class="cta__actions">
          <a routerLink="/contact" class="btn">
            {{ primaryLabel() }}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          <a routerLink="/solutions" class="btn btn--outline-invert">View solutions</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .cta { background: var(--paper); padding-block: clamp(1.25rem, 3vw, 2rem); }
      .cta__inner {
        position: relative;
        overflow: hidden;
        background: var(--brand-tint);
        color: var(--text);
        border: 1px solid var(--line);
        border-radius: 0;
        padding: clamp(1.75rem, 3.5vw, 3rem);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
      }
      .cta__title { color: var(--ink); max-width: 28ch; }
      .cta__sub { color: var(--text-muted); margin-top: 0.75rem; max-width: none; }
      .cta__actions { display: flex; flex-wrap: wrap; gap: 0.9rem; }
    `,
  ],
})
export class CtaBand {
  readonly title = input('Ready to discuss your finance needs?');
  readonly subtitle = input(
    'Talk to an advisor about accounting, tax, controls, cash flow, or strategic finance support.',
  );
  readonly primaryLabel = input('Start a conversation');
}
