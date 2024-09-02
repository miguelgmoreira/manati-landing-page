import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from '../../shared/button/button.component';
import { WindowService } from '../../shared/services/window.service';
import { TitleComponent } from '../../shared/title/title.component';
import { ProgramacaoComponent } from './programacao.component';

describe('ProgramacaoComponent', () => {
  let component: ProgramacaoComponent;
  let fixture: ComponentFixture<ProgramacaoComponent>;
  let windowServiceMock: jasmine.SpyObj<WindowService>;

  beforeEach(async () => {
    windowServiceMock = jasmine.createSpyObj('WindowService', ['isMobileScreen']);

    await TestBed.configureTestingModule({
      imports: [ProgramacaoComponent, ButtonComponent, TitleComponent, CommonModule],
      providers: [{ provide: WindowService, useValue: windowServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramacaoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set buttonSize to "medium" when isMobileScreen returns true', () => {
    windowServiceMock.isMobileScreen.and.returnValue(true);

    component.ngOnInit();

    expect(component.buttonSize).toBe('medium');
  });

  it('should set buttonSize to "large" when isMobileScreen returns false', () => {
    windowServiceMock.isMobileScreen.and.returnValue(false);

    component.ngOnInit();

    expect(component.buttonSize).toBe('large');
  });

  it('should have video element as ViewChild', () => {
    fixture.detectChanges();

    const videoElement = fixture.debugElement.query(By.css('video'));
    expect(videoElement).toBeTruthy();
    expect(component.video).toBeTruthy();
  });
});