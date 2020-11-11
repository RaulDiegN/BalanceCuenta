import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CuadranteComponent} from './cuadrante.component';

describe('CuadranteComponent', () => {
  let component: CuadranteComponent;
  let fixture: ComponentFixture<CuadranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuadranteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
