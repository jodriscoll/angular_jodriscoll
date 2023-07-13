import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { TranslateService } from '@ngx-translate/core';
import LocomotiveScroll from 'locomotive-scroll';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    scroll;

    constructor(
        private analyticsService: AnalyticsService,
        private translate: TranslateService
    ) { }

    ngOnInit(): void {
        this.analyticsService.sendAnalyticPageView('/', 'Visited Home');

        this.scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            getDirection: true
        });

        // Debugging.
        setTimeout(() => {
            console.log(this.scroll);
        }, 500);
    }
}
