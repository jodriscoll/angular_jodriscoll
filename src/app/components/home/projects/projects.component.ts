import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
    customOptions: OwlOptions = {
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        navSpeed: 1500,
        items: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 3000,
        lazyLoad: true
    };

    @ViewChild('imgContainer') imgContainer: ElementRef;

    constructor(
        public analyticsService: AnalyticsService
    ) { }

    ngOnInit(): void { }
}
