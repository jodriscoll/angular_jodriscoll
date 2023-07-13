import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from 'src/app/services/language/language.service';
// import * as AOS from 'aos';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    title = 'A MEAN Developer | Joseph O\'Driscoll';

    constructor(
        private titleService: Title,
        private metaService: Meta,
        private languageService: LanguageService
    ) { }

    ngOnInit(): void {
        this.languageService.initLanguage();
        this.titleService.setTitle('A MEAN Developer – Joseph O\'Driscoll');
        this.metaService.addTags([
            {
                name: 'keywords',
                content: 'Front-End, MEAN Stack Developer, MERN Stack Development, Front-End Engineer, UI Developer'
            },
            {
                name: 'description',
                content: 'A seasoned Front-end Engineer with over 15 years of expertise, I have adeptly employed open-source technologies to construct dynamic web applications, cutting-edge mobile apps, and immersive digital encounters. My diligent efforts have consistently facilitated business expansion and enhanced user experiences'
            },
        ]);
        // AOS.init();
    }
}
