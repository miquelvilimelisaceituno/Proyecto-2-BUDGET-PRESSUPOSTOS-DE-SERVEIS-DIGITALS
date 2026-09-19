import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaServicio } from './tarjeta-servicio';
import { Seo } from '../../models/seo.model';

describe('TarjetaServicio', () => {
  let component: TarjetaServicio;
  let fixture: ComponentFixture<TarjetaServicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaServicio],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaServicio);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('servicio', new Seo());
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
