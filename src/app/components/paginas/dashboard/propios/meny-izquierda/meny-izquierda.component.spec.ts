import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenyIzquierdaComponent } from './meny-izquierda.component';

describe('MenyIzquierdaComponent', () => {
  let component: MenyIzquierdaComponent;
  let fixture: ComponentFixture<MenyIzquierdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenyIzquierdaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenyIzquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
