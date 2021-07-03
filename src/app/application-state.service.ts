import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationStateService {

  private isMobileResolution: boolean;

  constructor() {
    if (window.innerWidth < 800) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  public getIsMobileResolution() {
    return this.isMobileResolution;
  }
}