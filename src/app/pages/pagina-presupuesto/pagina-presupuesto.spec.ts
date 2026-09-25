import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaPresupuesto } from './pagina-presupuesto';

describe('PaginaPresupuesto', () => {
  let component: PaginaPresupuesto;
  let fixture: ComponentFixture<PaginaPresupuesto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPresupuesto],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaPresupuesto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
