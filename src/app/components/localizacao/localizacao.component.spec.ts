import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizacaoComponent } from './localizacao.component';

describe('LocalizacaoComponent', () => {
  let component: LocalizacaoComponent;
  let fixture: ComponentFixture<LocalizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalizacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
