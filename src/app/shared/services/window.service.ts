import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  isMobileScreen(): boolean {
    return window.innerWidth < 768;
  }
}
