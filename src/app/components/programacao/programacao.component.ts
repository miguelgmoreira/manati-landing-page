import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { WindowService } from '../../shared/services/window/window.service';
import { TitleComponent } from '../../shared/title/title.component';

@Component({
  selector: 'app-programacao',
  standalone: true,
  imports: [ButtonComponent, TitleComponent, CommonModule],
  templateUrl: './programacao.component.html',
  styleUrl: './programacao.component.scss'
})
export class ProgramacaoComponent {
  @ViewChild('video') video!: ElementRef;

  buttonSize: string = '';

  constructor(private windowService: WindowService) {}

  ngOnInit(): void {
      this.buttonSize = this.windowService.isMobileScreen() ? 'medium' : 'large';
  }
}
