import { TestBed } from '@angular/core/testing';
import { SeleccionServicios } from './seleccion-servicios';
import { Seo } from '../features/service-selector/models/seo.model';
import { Publicidad } from '../features/service-selector/models/publicidad.model';

describe('SeleccionServicios', () => {
  let service: SeleccionServicios;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeleccionServicios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Alternar selección de la misma instancia', () => {
    const seleccionTest = new Seo();
    const primerResultado = service.seleccion(seleccionTest);
    expect(primerResultado).toBe(true);
    expect(service.obtenerSeleccionados()).toContain(seleccionTest);
    const segundoResultado = service.seleccion(seleccionTest);
    expect(segundoResultado).toBe(false);
    expect(service.obtenerSeleccionados()).not.toContain(seleccionTest);
  });

  it('comparacion por referencia indexOf', () => {
    const seoTest1 = new Seo();
    const seoTest2 = new Seo()
    service.seleccion(seoTest1);
    expect(service.obtenerSeleccionados()).toContain(seoTest1);
    expect(service.obtenerSeleccionados()).not.toContain(seoTest2);
    service.seleccion(seoTest2)
    expect(service.obtenerSeleccionados()).toContain(seoTest1);
    expect(service.obtenerSeleccionados()).toContain(seoTest2);
  });

  it('obtenerSeleccionados() tiene que dar una copia del array, no la referncia real', () => {
    const testSeo = new Seo(); 
    service.seleccion(testSeo);
    const testSeleccionados = service.obtenerSeleccionados();
    const publicidadTest = new Publicidad()
    testSeleccionados.push(publicidadTest)
    expect(service.obtenerSeleccionados()).not.toContain(publicidadTest)
  });

  it('consultarPrecioTotal() funciona como deberia', () => {
    const testSeo = new Seo(); 
    const testPublicidad = new Publicidad();
    service.seleccion(testSeo)
    service.seleccion(testPublicidad)
    expect(service.consultarPrecioTotal()).toBe(700);
  });

});
