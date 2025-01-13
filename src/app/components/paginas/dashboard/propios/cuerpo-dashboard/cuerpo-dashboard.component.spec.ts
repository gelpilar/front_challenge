import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoDashboardComponent } from './cuerpo-dashboard.component';

describe('CuerpoDashboardComponent', () => {
  let component: CuerpoDashboardComponent;
  let fixture: ComponentFixture<CuerpoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuerpoDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
