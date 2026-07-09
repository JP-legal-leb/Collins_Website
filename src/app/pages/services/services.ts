import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SUITE, WHERE_WE_GO } from '../../core/site-data';
import { PageHero } from '../../shared/page-hero';
import { RevealDirective } from '../../shared/reveal.directive';
import { CtaBand } from '../../shared/cta-band';

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHero, RevealDirective, CtaBand],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly suite = SUITE;
  protected readonly intro = WHERE_WE_GO;
}
