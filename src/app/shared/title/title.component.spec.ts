import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly bind @Input title', () => {
    const testTitle = 'Test Title';
    fixture.componentRef.setInput('title', testTitle)
    fixture.detectChanges();
    expect(component.title()).toBe(testTitle);
  });

  it('should correctly bind @Input cor', () => {
    const testCor = 'amarelo';
    fixture.componentRef.setInput('cor', testCor)
    fixture.detectChanges();
    expect(component.cor()).toBe(testCor);
  });

  it('should correctly bind @Input font', () => {
    const testFont = 'montserrat';
    fixture.componentRef.setInput('font', testFont)
    fixture.detectChanges();
    expect(component.font()).toBe(testFont);
  });

  it('should have default font as "adumu"', () => {
    expect(component.font()).toBe('adumu');
  });

  it('should correctly bind @Input fontWeight', () => {
    const testFontWeight = 'bold';
    fixture.componentRef.setInput('fontWeight', testFontWeight)
    fixture.detectChanges();
    expect(component.fontWeight()).toBe(testFontWeight);
  });
});
