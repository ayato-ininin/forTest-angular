import { Component } from '@angular/core';

import { RoutingService } from './core/services/routing.service';
import { UrlConst } from './pages/constants/url-const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product-manage';
  // constructor(public name: string) { }
  // と下記は、同義である！！！！
  // name: string;
  // constructor(initName: string) {
  //   this.name = initName;
  //  }

  constructor(private routingService: RoutingService) {}
  public isSignInPage(): boolean {
    console.log(this.routingService.router.url);
    // ただ、これはtsconfig.jsonのcompilerOptionsでstrictNullChecksがtrueになっていない場合はエラーになりません。
    if (UrlConst.SLASH === this.routingService.router.url) {
      return true;
    }
    if (UrlConst.SLASH + UrlConst.PATH_SIGN_IN === this.routingService.router.url) {
      return true;
    }
    return false;
    // switch (this.routingService.router.url) {
    //   case UrlConst.SLASH:
    //     return true;
    //   case UrlConst.SLASH + UrlConst.PATH_SIGN_IN:
    //     return true;
    //   default: {
    //     return false;
    //   }
    // }
  }
}
