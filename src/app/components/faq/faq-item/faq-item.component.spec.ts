import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DividerComponent } from '../../../shared/divider/divider.component';
import { FaqQuestion } from '../models/faqQuestion.model';
import { FaqItemComponent } from './faq-item.component';

describe('FaqItemComponent', () => {
  let component: FaqItemComponent;
  let fixture: ComponentFixture<FaqItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, DividerComponent, FaqItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FaqItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.expanded).toBeFalse();
  });

  it('should toggle expanded state when toggleExpand is called', () => {
    component.toggleExpand();
    expect(component.expanded).toBeTrue();

    component.toggleExpand();
    expect(component.expanded).toBeFalse();
  });

  it('should set question input correctly', () => {
    const question: FaqQuestion = {
      question: 'What is Angular?',
      answer: 'Angular is a platform for building mobile and desktop web applications.',
    };
    fixture.componentRef.setInput('question', question)
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.faq-pergunta')?.textContent).toContain(question.question);
  });
});
