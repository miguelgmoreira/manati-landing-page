import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  let images = [
    { imageSrc: 'image1.jpg', imageAlt: 'Image 1' },
    { imageSrc: 'image2.jpg', imageAlt: 'Image 2' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, CarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should start auto sliding if autoSlide is true', () => {
    fixture.componentRef.setInput('autoSlide', true)
    spyOn(component, 'autoSlideImages');
    component.ngOnInit();
    expect(component.autoSlideImages).toHaveBeenCalled();
  });

  it('should not start auto sliding if autoSlide is false', () => {
    fixture.componentRef.setInput('autoSlide', false)
    spyOn(component, 'autoSlideImages');
    component.ngOnInit();
    expect(component.autoSlideImages).not.toHaveBeenCalled();
  });

  it('should select the correct image', () => {
    fixture.componentRef.setInput('images', images)
    component.selectImage(1);
    expect(component.selectedIndex).toBe(1);
  });

  it('should go to the previous image', () => {
    fixture.componentRef.setInput('images', images)
    component.selectedIndex = 1;
    component.onPrevClick();
    expect(component.selectedIndex).toBe(0);
  });

  it('should go to the next image', () => {
    fixture.componentRef.setInput('images', images)
    component.selectedIndex = 0;
    component.onNextClick();
    expect(component.selectedIndex).toBe(1);
  });

  it('should reset to the first image if at the end and onNextClick is called', () => {
    fixture.componentRef.setInput('images', images)
    component.selectedIndex = 1;
    component.onNextClick();
    expect(component.selectedIndex).toBe(0);
  });

  it('should reset to the last image if at the start and onPrevClick is called', () => {
    fixture.componentRef.setInput('images', images)
    component.selectedIndex = 0;
    component.onPrevClick();
    expect(component.selectedIndex).toBe(1);
  });

  it('should start auto sliding again after stopping', () => {
    fixture.componentRef.setInput('autoSlide', true)
    spyOn(component, 'autoSlideImages');
    component.stopAutoSlide();
    component.selectImage(0);
    expect(component.autoSlideImages).toHaveBeenCalled();
  });

  it('should clear interval on stopAutoSlide', () => {
    component.slideIntervalId = setInterval(() => {}, 1000);
    spyOn(window, 'clearInterval');
    component.stopAutoSlide();
    expect(window.clearInterval).toHaveBeenCalledWith(
      component.slideIntervalId
    );
  });
});
