import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="logo" [class.logo--large]="size() === 'large'">
      <img
        class="logo__img"
        src="/collins-logo.png"
        alt="Collins Advisory Services"
        width="1007"
        height="245"
        decoding="async"
      />
    </span>
  `,
  styles: [
    `
      .logo {
        display: inline-flex;
        align-items: center;
        line-height: 0;
      }
      .logo__img {
        display: block;
        width: auto;
        height: 2.1rem;
        max-width: min(100%, 11.5rem);
        object-fit: contain;
        object-position: left center;
      }
      .logo--large .logo__img {
        height: 2.5rem;
        max-width: min(100%, 13.5rem);
      }

      @media (min-width: 720px) {
        .logo__img {
          height: 2.35rem;
          max-width: min(100%, 12.75rem);
        }
        .logo--large .logo__img {
          height: 2.85rem;
          max-width: min(100%, 15rem);
        }
      }
    `,
  ],
})
export class Logo {
  readonly size = input<'default' | 'large'>('default');
}
