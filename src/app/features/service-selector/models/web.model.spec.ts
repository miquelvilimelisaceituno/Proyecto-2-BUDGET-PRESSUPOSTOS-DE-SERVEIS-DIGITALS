import { Web } from './web.model';

describe('Web', () => {
  it('should create an instance', () => {
    expect(new Web(0,0)).toBeTruthy();
  });
  it('Caso mínimo de 0 idiomas y 0 paginas debe devolver 500 de precio base', () => {
    expect(new Web(0,0).obtenerPrecio()).toBe(500);
  });
  it('Valores de idiomas y paginas mayores que 0', () => {
    expect(new Web(2,1).obtenerPrecio()).toBe(590);
  });
  it('mutabilidad de idiomas o paginas despues de creado', () => {
      const testWeb = new Web(0,0);
      testWeb.paginas = 5;
      const precioTestWeb = testWeb.obtenerPrecio()
    expect(precioTestWeb).toBe(650);
  });
});
