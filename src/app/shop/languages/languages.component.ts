import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule, TranslateModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent {
  faGlobe = faGlobe;

  languages: any[] = [
    { name: 'Türkçe', code: 'tr', flag: 'TR.png' },
    { name: 'English', code: 'en', flag: 'US.png' }
  ]

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'tr']);
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|tr/) ? browserLang : 'tr');
  }

  changeLang(item: string) {
    this.translate.use(item);
  }

}
