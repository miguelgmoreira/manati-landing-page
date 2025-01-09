import { CommonModule, ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { DuvidasComponent } from './components/duvidas/duvidas.component';
import { EspacoComponent } from './components/espaco/espaco.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgramacaoComponent } from './components/programacao/programacao.component';
import { ToastService } from './shared/services/toast/toast.service';
import { ToastComponent } from './shared/toast/toast.component';

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
    FooterComponent,
    ToastComponent,
    LocalizacaoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;
  
  constructor(private viewPortScroller: ViewportScroller, private toastService: ToastService) {}

  ngAfterViewInit() {
    this.toastService.setToastComponent(this.toastComponent);
  }
  
  title = 'manati-landing-page';

  scrollToSection(section: string) {
    this.viewPortScroller.scrollToAnchor(section);
    
  }

  goToWhatsapp() {
    window.open(
      `https://wa.me/556184914194?text=Olá,%20vim%20pelo%20site!`
    );
  }
}
