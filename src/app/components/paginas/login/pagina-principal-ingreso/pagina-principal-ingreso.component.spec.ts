import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalIngresoComponent } from './pagina-principal-ingreso.component';

describe('PaginaPrincipalIngresoComponent', () => {
  let component: PaginaPrincipalIngresoComponent;
  let fixture: ComponentFixture<PaginaPrincipalIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaPrincipalIngresoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPrincipalIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
