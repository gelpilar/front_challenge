import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasAlertasComponent } from './tarjetas-alertas.component';

describe('TarjetasAlertasComponent', () => {
  let component: TarjetasAlertasComponent;
  let fixture: ComponentFixture<TarjetasAlertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TarjetasAlertasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
