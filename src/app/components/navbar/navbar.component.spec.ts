import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menuExpanded state when toggleExpand is called', () => {
    expect(component.menuExpanded).toBe(false);

    component.toggleExpand();
    expect(component.menuExpanded).toBe(true);

    component.toggleExpand();
    expect(component.menuExpanded).toBe(false);
  });

  it('should emit navigateToSection and close menu when navigateTo is called', () => {
    spyOn(component.navigateToSection, 'emit');

    component.menuExpanded = true;
    const section = 'home';

    component.navigateTo(section);
    
    expect(component.menuExpanded).toBe(false);
    expect(component.navigateToSection.emit).toHaveBeenCalledWith(section);
  });

  it('should close the menu if screen width is greater than 768px and menu is expanded', () => {
    component.menuExpanded = true;

    window.innerWidth = 1024;
    window.dispatchEvent(new Event('resize'));

    expect(component.menuExpanded).toBe(false);
  });

  it('should not close the menu if screen width is 768px or less', () => {
    component.menuExpanded = true;

    window.innerWidth = 768;
    window.dispatchEvent(new Event('resize'));

    expect(component.menuExpanded).toBe(true);
  });
});
