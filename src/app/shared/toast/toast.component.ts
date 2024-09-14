import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Toast {
  message: string;
}

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {

  toasts: Toast[] = [];

  showToast(message: string) {
    const toast: Toast = { message };
    this.toasts.push(toast);

    setTimeout(() => {
      this.removeToast(toast);
    }, 5000);
  }

  removeToast(toast: Toast) {
    const index = this.toasts.indexOf(toast);
    if (index !== -1) {
      this.toasts.splice(index, 1);
    }
  }
}
