import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    constructor(
        private analyticsService: AnalyticsService,
        private translate: TranslateService
    ) { }

    ngOnInit(): void {
        this.analyticsService.sendAnalyticPageView('/', 'Visited Home');
    }
}
