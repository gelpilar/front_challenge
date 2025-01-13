import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrinciparDashboardComponent } from './pagina-principar-dashboard.component';

describe('PaginaPrinciparDashboardComponent', () => {
  let component: PaginaPrinciparDashboardComponent;
  let fixture: ComponentFixture<PaginaPrinciparDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaPrinciparDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPrinciparDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
