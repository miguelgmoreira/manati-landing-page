import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { EspacoComponent } from './components/espaco/espaco.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgramacaoComponent } from './components/programacao/programacao.component';
import { HomeComponent } from './shared/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    ProgramacaoComponent,
    AboutComponent,
    EspacoComponent,
    CardapioComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private viewPortScroller: ViewportScroller) {}

  title = 'manati-landing-page';

  scrollToSection(section: string) {
    this.viewPortScroller.scrollToAnchor(section);
  }
}
