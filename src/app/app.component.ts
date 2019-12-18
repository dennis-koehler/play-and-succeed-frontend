import { Component } from '@angular/core';
import { INavbarData } from 'ng-responsive-navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'play-and-succeed-frontend';

  public navBarData: INavbarData;
  public view = 'landing';

  public constructor() {
    this.navBarData = this.getNavBarData();
  }

  public onClickMenuEntry(target: string) {
    this.view = target;
  }

  private getNavBarData(): INavbarData {
    return {
      // replace the following by your data...
      logoURL: 'https://fance-stiftung.de/api/app/app-images/logo.png',
      appTitle: 'App Title',
      menuEntries: [{
        isActive: true,
        text: 'Home',
        href: '/home',
      },
      {
        isActive: false,
        text: 'Menu Entry 2',
        href: '/menuEntry2',
      },
      {
        isActive: false,
        text: 'Contact',
        href: '/contact',
      }]
    };
  }
}