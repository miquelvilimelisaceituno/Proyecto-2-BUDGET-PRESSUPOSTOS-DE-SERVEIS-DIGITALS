import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaPresupuesto } from './tarjeta-presupuesto';

describe('TarjetaPresupuesto', () => {
  let component: TarjetaPresupuesto;
  let fixture: ComponentFixture<TarjetaPresupuesto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaPresupuesto],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaPresupuesto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
