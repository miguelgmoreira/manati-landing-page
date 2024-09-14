import { Injectable } from '@angular/core';
import { ToastComponent } from '../../toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  private toastComponent!: ToastComponent;

  setToastComponent(component: ToastComponent) {
    this.toastComponent = component;
  }

  showToast(message: string) {
    if (this.toastComponent) {
      this.toastComponent.showToast(message);
    }
  }
}
