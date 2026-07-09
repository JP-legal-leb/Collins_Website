import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ADD_ONS, LADDER, PRICING, TIERS } from '../../core/site-data';
import { PageHero } from '../../shared/page-hero';
import { RevealDirective } from '../../shared/reveal.directive';
import { CtaBand } from '../../shared/cta-band';

@Component({
  selector: 'app-solutions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHero, RevealDirective, CtaBand],
  templateUrl: './solutions.html',
  styleUrl: './solutions.scss',
})
export class Solutions {
  protected readonly tiers = TIERS;
  protected readonly ladder = LADDER;
  protected readonly addOns = ADD_ONS;
  protected readonly pricing = PRICING;
}
