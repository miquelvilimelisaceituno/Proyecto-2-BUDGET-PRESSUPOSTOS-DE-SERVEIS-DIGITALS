import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { RepositorioPresupuestos } from '../app/data/repositorio-presupuestos.model';
import { RepositorioPresupuestosFake } from '../app/data/repositorio-presupuestos.fake'

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        { provide: RepositorioPresupuestos, useClass: RepositorioPresupuestosFake }]
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-selector-servicios')?.textContent).toBeTruthy();
    expect(compiled.querySelector('app-consulta-historial')?.textContent).toBeTruthy();
    expect(compiled.querySelector('app-formulario-cliente')?.textContent).toBeTruthy();
  });
});
