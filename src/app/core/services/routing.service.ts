import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UrlConst } from '../../pages/constants/url-const';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(public router: Router) { }
  /**
   *
   * @param path path to pages
   */
  public navigate(path: string) {
    //　パスを移動する
    this.router.navigate([UrlConst.SLASH + path]);
  }
}
