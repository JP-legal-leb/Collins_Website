import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { COMPANY, TIERS } from '../../core/site-data';
import { PageHero } from '../../shared/page-hero';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, PageHero, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  protected readonly company = COMPANY;
  protected readonly tiers = TIERS;
  protected readonly submitted = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    interest: ['General enquiry'],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected readonly interests = [
    'General enquiry',
    'Starter — Financial Foundations',
    'Growth — Financial Control & Optimization',
    'Strategic CFO — Advisory & Value Creation',
    'Partnership opportunity',
  ];

  invalid(control: string): boolean {
    const c = this.form.get(control);
    return !!c && c.invalid && (c.touched || this.submitted());
  }

  submit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, company, interest, message } = this.form.getRawValue();
    const subject = encodeURIComponent(`Website enquiry — ${interest}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || '—'}\nInterest: ${interest}\n\n${message}`,
    );
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
  }
}
