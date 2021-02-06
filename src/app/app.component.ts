import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-cli';

  constructor(
    private router: Router, 
    public translate: TranslateService) 
  {
    let path = localStorage.getItem('path');
    if(path) {
      localStorage.removeItem('path');
      this.router.navigate([path]);
    }

    translate.addLangs(['de', 'en', 'fr']);
    translate.setDefaultLang('de');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/de|en|fr/) ? browserLang : 'de');
  }
}