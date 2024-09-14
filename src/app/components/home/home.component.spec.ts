import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from '../../shared/button/button.component';
import { WindowService } from '../../shared/services/window/window.service';
import { TitleComponent } from '../../shared/title/title.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockWindowService: jasmine.SpyObj<WindowService>;

  beforeEach(async () => {
    mockWindowService = jasmine.createSpyObj('WindowService', ['isMobileScreen']);

    await TestBed.configureTestingModule({
      imports: [HomeComponent, ButtonComponent, CommonModule, TitleComponent],
      providers: [{ provide: WindowService, useValue: mockWindowService }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isMobileScreen and buttonSize based on screen size', () => {
    mockWindowService.isMobileScreen.and.returnValue(true);
    fixture.detectChanges();

    expect(component.isMobileScreen).toBeTrue();
    expect(component.buttonSize).toBe('medium');
  });

  it('should call setupHomeBackground indirectly after view initialization', () => {
    spyOn(component as any, 'setupHomeBackground');
    fixture.detectChanges();

    component.ngAfterViewInit();
    expect((component as any).setupHomeBackground).toHaveBeenCalled();
  });
});
