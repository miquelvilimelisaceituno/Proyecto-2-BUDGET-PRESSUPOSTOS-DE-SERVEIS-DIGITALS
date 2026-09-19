import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioCliente } from './formulario-cliente';
import { RepositorioPresupuestos } from '../../../../data/repositorio-presupuestos.model';
import { RepositorioPresupuestosFake } from '../../../../data/repositorio-presupuestos.fake'

describe('FormularioCliente', () => {
  let component: FormularioCliente;
  let fixture: ComponentFixture<FormularioCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCliente],
      providers: [
        { provide: RepositorioPresupuestos, useClass: RepositorioPresupuestosFake }]
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioCliente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
