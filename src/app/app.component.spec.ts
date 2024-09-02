import { ViewportScroller } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { DuvidasComponent } from './components/duvidas/duvidas.component';
import { EspacoComponent } from './components/espaco/espaco.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgramacaoComponent } from './components/programacao/programacao.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let viewportScroller: ViewportScroller;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
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
      providers: [ViewportScroller]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    viewportScroller = TestBed.inject(ViewportScroller);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have the title "manati-landing-page"', () => {
    expect(component.title).toEqual('manati-landing-page');
  });

  it('should call scrollToAnchor with the correct section ID when scrollToSection is called', () => {
    const scrollToAnchorSpy = spyOn(viewportScroller, 'scrollToAnchor');

    const sectionId = 'about';
    component.scrollToSection(sectionId);

    expect(scrollToAnchorSpy).toHaveBeenCalledWith(sectionId);
  });
});
