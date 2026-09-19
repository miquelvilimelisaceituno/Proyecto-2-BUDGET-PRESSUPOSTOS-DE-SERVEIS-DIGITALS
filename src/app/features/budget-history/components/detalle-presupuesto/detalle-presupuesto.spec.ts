import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallePresupuesto } from './detalle-presupuesto';
import { Presupuesto } from '../../../../shared/models/presupuesto.model';


describe('DetallePresupuesto', () => {
  let component: DetallePresupuesto;
  let fixture: ComponentFixture<DetallePresupuesto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallePresupuesto],
    }).compileComponents();

    fixture = TestBed.createComponent(DetallePresupuesto);
    component = fixture.componentInstance;
    const presupuestoDePrueba: Presupuesto = { nombre: 'Coby', email: 'coby@vayavaya.org', telefono: '1234567', servicios:[{nombre: 'Coby', precio: 120 }], total: 120, fecha: Date.now(), id: 2};
    fixture.componentRef.setInput('presupuesto', presupuestoDePrueba);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
