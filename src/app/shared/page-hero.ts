import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="page-hero">
      <div class="container page-hero__inner">
        <div class="page-hero__main">
          <span class="eyebrow">{{ eyebrow() }}</span>
          <h1 class="display-2 page-hero__title">{{ title() }}</h1>
        </div>
        @if (subtitle()) {
          <p class="lead page-hero__sub">{{ subtitle() }}</p>
        }
      </div>
    </section>
  `,
  styles: [
    `
      .page-hero {
        position: relative;
        overflow: hidden;
        background: var(--paper-2);
        color: var(--text);
        padding-block: clamp(6.5rem, 10vw, 8.5rem) clamp(2.5rem, 4.5vw, 4rem);
        border-bottom: 1px solid var(--line);
      }
      .page-hero__inner {
        position: relative;
        display: grid;
        gap: clamp(1.5rem, 4vw, 4rem);
        align-items: end;

        @media (min-width: 880px) {
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
        }
      }
      .page-hero__title {
        margin-top: 0.85rem;
        color: var(--ink);
        max-width: none;
      }
      .page-hero__sub {
        margin: 0;
        color: var(--text-muted);
        max-width: none;
        padding-bottom: 0.2rem;

        @media (min-width: 880px) {
          padding-bottom: 0.35rem;
        }
      }
    `,
  ],
})
export class PageHero {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
}
