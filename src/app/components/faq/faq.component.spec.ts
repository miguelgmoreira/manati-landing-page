import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { WindowService } from '../../shared/services/window.service';
import { FaqComponent } from './faq.component';

describe('FaqComponent', () => {
  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;
  let mockWindowService: jasmine.SpyObj<WindowService>;
  let mockSanitizer: jasmine.SpyObj<DomSanitizer>;

  beforeEach(async () => {
    mockWindowService = jasmine.createSpyObj('WindowService', ['isMobileScreen']);
    mockSanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustHtml']);

    await TestBed.configureTestingModule({
      providers: [
        { provide: WindowService, useValue: mockWindowService },
        { provide: DomSanitizer, useValue: mockSanitizer },
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [FaqComponent, BrowserModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set isMobileScreen to true and buttonSize to "medium" when isMobileScreen() returns true', () => {
    mockWindowService.isMobileScreen.and.returnValue(true);

    component.ngOnInit();

    expect(component.isMobileScreen).toBeTrue();
    expect(component.buttonSize).toBe('medium');
  });

  it('should set isMobileScreen to false and buttonSize to "large" when isMobileScreen() returns false', () => {
    mockWindowService.isMobileScreen.and.returnValue(false);

    component.ngOnInit();

    expect(component.isMobileScreen).toBeFalse();
    expect(component.buttonSize).toBe('large');
  });

  it('should sanitize HTML content in FAQ answers', () => {
    const sanitizedHtml = {} as SafeHtml;
    mockSanitizer.bypassSecurityTrustHtml.and.returnValue(sanitizedHtml);

    component.ngOnInit();

    component.faqQuestions.forEach((question) => {
      expect(question.answerHtml).toBe(sanitizedHtml);
    });
  });

  it('should add a non-breaking space before question marks in questions', () => {
    const questionWithSpace = 'Como funciona o happy hour ?';
    const questionWithNbsp = 'Como funciona o happy hour&nbsp;?';

    const result = component.addNonBreakingSpace(questionWithSpace);

    expect(result).toBe(questionWithNbsp);
  });
});
