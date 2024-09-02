import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have default input values', () => {
    expect(component.buttonLabel()).toBe('ENTRAR EM CONTATO');
    expect(component.type()).toBe('primary');
    expect(component.icon()).toBeNull();
    expect(component.size()).toBe('small');
    expect(component.fontFamily()).toBe('adumu');
    expect(component.fontWeight()).toBe('normal');
    expect(component.whatsappMessage()).toBe('Olá, vim pelo site!');
  });

  it('should format the WhatsApp message correctly', () => {
    const message = 'Olá, tudo bem?';
    const encodedMessage = component['encodeMessage'](message);
    expect(encodedMessage).toBe(encodeURIComponent(message));
  });
});
