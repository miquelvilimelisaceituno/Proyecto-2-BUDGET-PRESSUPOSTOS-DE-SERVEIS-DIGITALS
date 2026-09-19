import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaPresupuesto } from './tarjeta-presupuesto';
import { Presupuesto } from '../../../../shared/models/presupuesto.model';

describe('TarjetaPresupuesto', () => {
  let component: TarjetaPresupuesto;
  let fixture: ComponentFixture<TarjetaPresupuesto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaPresupuesto],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaPresupuesto);
    component = fixture.componentInstance;
    const presupuestoDePrueba: Presupuesto = { nombre: 'Coby', email: 'coby@vayavaya.org', telefono: '1234567', servicios:[{nombre: 'Coby', precio: 120 }], total: 120, fecha: Date.now(), id: 2};
    fixture.componentRef.setInput('presupuesto', presupuestoDePrueba);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
