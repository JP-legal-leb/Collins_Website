import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Collins wordmark: monogram + name. `tone` adapts to dark/light surfaces. */
@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="logo" [class.logo--invert]="tone() === 'invert'">
      <svg class="logo__mark" viewBox="0 0 44 44" aria-hidden="true">
        <rect class="logo__bg" width="44" height="44" rx="4" />
        <path
          class="logo__arc"
          d="M31 14.5a10.5 10.5 0 1 0 0 15"
          fill="none"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          class="logo__a"
          d="M22 13.5l6 17M22 13.5l-6 17"
          fill="none"
          stroke-width="3.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span class="logo__text">
        <span class="logo__name">Collins</span>
        <span class="logo__sub">Advisory Group</span>
      </span>
    </span>
  `,
  styles: [
    `
      .logo {
        display: inline-flex;
        align-items: center;
        gap: 0.7rem;
      }
      .logo__mark {
        width: 38px;
        height: 38px;
        flex: none;
      }
      .logo__bg { fill: var(--ink); }
      .logo__arc { stroke: var(--brand-bright); }
      .logo__a { stroke: #fff; }
      .logo__text {
        display: flex;
        flex-direction: column;
        line-height: 1;
      }
      .logo__name {
        font-family: var(--font-display);
        font-weight: 400;
        font-size: 1.12rem;
        letter-spacing: -0.01em;
        color: var(--ink);
      }
      .logo__sub {
        font-family: var(--font-body);
        font-size: 0.66rem;
        font-weight: 600;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: var(--text-muted);
        margin-top: 3px;
      }
      .logo--invert .logo__bg { fill: rgba(255, 255, 255, 0.08); }
      .logo--invert .logo__name { color: #fff; }
      .logo--invert .logo__sub { color: var(--text-invert-muted); }
    `,
  ],
})
export class Logo {
  readonly tone = input<'default' | 'invert'>('default');
}
