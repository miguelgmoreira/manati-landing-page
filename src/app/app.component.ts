import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { DuvidasComponent } from './components/duvidas/duvidas.component';
import { EspacoComponent } from './components/espaco/espaco.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgramacaoComponent } from './components/programacao/programacao.component';

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
    DuvidasComponent,
    FaqComponent,
    FooterComponent
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
