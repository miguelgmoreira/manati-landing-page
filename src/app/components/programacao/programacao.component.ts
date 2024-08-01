import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { TitleComponent } from '../../shared/title/title.component';

@Component({
  selector: 'app-programacao',
  standalone: true,
  imports: [ButtonComponent, TitleComponent],
  templateUrl: './programacao.component.html',
  styleUrl: './programacao.component.scss'
})
export class ProgramacaoComponent {

  buttonSize: string = ''

  ngOnInit(): void {
    if(window.innerWidth < 768) {
      this.buttonSize = 'medium';
    } else {
      this.buttonSize = 'large';
    }
  }
}
