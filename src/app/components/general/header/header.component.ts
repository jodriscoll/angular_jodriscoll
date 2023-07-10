import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, query, transition, stagger, animate } from '@angular/animations';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { FormControl } from '@angular/forms';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('animateMenu', [
      transition(':enter', [
        query('*', [
          style({
            opacity: 0,
            transform: 'translateY(-50%)'
          }),
          stagger(50, [
            animate(
                '250ms cubic-bezier(.35, 0, .25, 1)',
                style({
                  opacity: 1,
                  transform: 'none'
                })
            )
          ])
        ])
      ])
    ])
  ]
})

export class HeaderComponent implements OnInit {
  responsiveMenuVisible: Boolean = false;
  pageYPosition: number;
  languageFormControl: FormControl = new FormControl();
  resumeFileName = '';

  constructor(
      private router: Router,
      public analyticsService: AnalyticsService,
      public languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.languageFormControl.valueChanges.subscribe(val => this.languageService.changeLanguage(val));
    this.languageFormControl.setValue(this.languageService.language);
  }

  scroll(el) {
    if (document.getElementById(el)) {
      document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/home']).then(() => document.getElementById(el).scrollIntoView({ behavior: 'smooth' }) );
    }
    this.responsiveMenuVisible = false;
  }

  downloadResume() {
    this.languageService.translateService.get('Header.resumeFileName').subscribe(val => {
      this.resumeFileName = val;
      const url = window.location.href;
      window.open(url + '/../assets/resume/' + this.resumeFileName, '_blank');
    });

  }

  @HostListener('window:scroll', ['getScrollPosition($event)'])
  getScrollPosition(event) {
    this.pageYPosition = window.pageYOffset;
  }

  changeLanguage(language: string) {
    this.languageFormControl.setValue(language);
  }
}
