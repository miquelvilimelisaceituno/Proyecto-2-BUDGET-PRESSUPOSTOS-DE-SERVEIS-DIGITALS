import { TestBed } from '@angular/core/testing';
import { GeneradorPresupuesto } from './generador-presupuesto';
import { RepositorioPresupuestos } from '../../../data/repositorio-presupuestos.model';
import { RepositorioPresupuestosFake } from '../../../data/repositorio-presupuestos.fake'
import { SeleccionServicios } from '../../../core/seleccion-servicios';
import { Seo } from '../../service-selector/models/seo.model';
import { Publicidad } from '../../service-selector/models/publicidad.model';


describe('GeneradorPresupuesto', () => {
  let service: GeneradorPresupuesto;
  let seleccion: SeleccionServicios;
  let repositorio: RepositorioPresupuestos;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: RepositorioPresupuestos, useClass: RepositorioPresupuestosFake }]
      });
    service = TestBed.inject(GeneradorPresupuesto);
    seleccion = TestBed.inject(SeleccionServicios);
    repositorio = TestBed.inject(RepositorioPresupuestos)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('el presupuesto generado tiene los datos correctos', () => {
    seleccion.seleccion(new Seo());
    seleccion.seleccion(new Publicidad());
    const presupuestoTest = service.generar('Jose', 'jose@jose.es', '17272638')
    expect(presupuestoTest.nombre).toBe('Jose')
    expect(presupuestoTest.email).toBe('jose@jose.es')
    expect(presupuestoTest.telefono).toBe('17272638')
    expect(presupuestoTest.total).toBe(700)
    expect(presupuestoTest.id).toBe(1)
  });

it('el presupuesto queda realmente guardado en el repositorio', () => {
    seleccion.seleccion(new Seo());
    const presupuestoTest = service.generar('Maria', 'maria@maria.es', '666622222')
    expect(repositorio.listar()).toContain(presupuestoTest)
  });

});
