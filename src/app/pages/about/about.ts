import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COMPANY, MISSION, PRINCIPLES, STATS, WHY_US } from '../../core/site-data';
import { PageHero } from '../../shared/page-hero';
import { RevealDirective } from '../../shared/reveal.directive';
import { CtaBand } from '../../shared/cta-band';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHero, RevealDirective, CtaBand],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly company = COMPANY;
  protected readonly mission = MISSION;
  protected readonly principles = PRINCIPLES;
  protected readonly whyUs = WHY_US;
  protected readonly stats = STATS;
}
