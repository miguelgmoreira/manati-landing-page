import { TestBed } from '@angular/core/testing';
import { WindowService } from './window.service';

describe('WindowService', () => {
  let service: WindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowService]
    });
    service = TestBed.inject(WindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for mobile screen width', () => {
    const originalInnerWidth = window.innerWidth;
    (window as any).innerWidth = 500;

    expect(service.isMobileScreen()).toBeTrue();

    (window as any).innerWidth = originalInnerWidth;
  });

  it('should return false for non-mobile screen width', () => {
    const originalInnerWidth = window.innerWidth;
    (window as any).innerWidth = 800;

    expect(service.isMobileScreen()).toBeFalse();

    (window as any).innerWidth = originalInnerWidth;
  });
});
