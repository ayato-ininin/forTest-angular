import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  //html側からみたいので、privateにしていない。
  public isLoading: boolean = false;

  constructor() {}

  /**
   * Starts loading
   */
  startLoading() {
    this.isLoading = true;
  }

  /**
   * Stops loading
   */
  stopLoading() {
    this.isLoading = false;
  }
}
