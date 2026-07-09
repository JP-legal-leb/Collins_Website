import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CLIENTS,
  COMPANY,
  LADDER,
  PRESS,
  STATS,
  SUITE,
  TIERS,
  WHERE_WE_GO,
  WHO_WE_ARE,
  WHY_US,
} from '../../core/site-data';
import { RevealDirective } from '../../shared/reveal.directive';
import { CtaBand } from '../../shared/cta-band';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RevealDirective, CtaBand],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly clients = CLIENTS;
  protected readonly company = COMPANY;
  protected readonly press = PRESS;
  protected readonly featuredPress = PRESS[0];
  protected readonly suite = SUITE;
  protected readonly tiers = TIERS;
  protected readonly ladder = LADDER;
  protected readonly stats = STATS;
  protected readonly whyUs = WHY_US;
  protected readonly whoWeAre = WHO_WE_ARE;
  protected readonly whereWeGo = WHERE_WE_GO;
}
