import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ToastService } from '../services/toast/toast.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  providers: [
    {provide: 'googleTagManagerId', useValue: "AW-16664695333"}
  ]
})
export class ButtonComponent {
  buttonLabel = input<string>('ENTRAR EM CONTATO');
  type = input<'primary' | 'secondary' | 'outlined'| string>('primary');
  icon = input<string | null>(null);
  size =  input<'large' | 'medium' | 'small' | 'custom' | string>('small')
  fontFamily = input<string>('adumu');
  fontWeight = input<string>('normal')
  whatsappMessage = input<string>("Olá, vim pelo site!");

  constructor(private toastService: ToastService) {}

  private encodeMessage(message: string) {
    return encodeURIComponent(message);
  }

  public goToWhatsapp() {
    const formatedString = this.encodeMessage(this.whatsappMessage())
    window.open(
      `https://wa.me/556184914194?text=${formatedString}`,
      '_blank'
    );
  }

  public serviceUnavailable(): void {
    console.log("Serviço temporariamente indisponível!");
    this.toastService.showToast("Serviço temporariamente indisponível!");
  }
}
