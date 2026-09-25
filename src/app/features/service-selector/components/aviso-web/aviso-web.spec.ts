import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvisoWeb } from './aviso-web';

describe('AvisoWeb', () => {
  let component: AvisoWeb;
  let fixture: ComponentFixture<AvisoWeb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisoWeb],
    }).compileComponents();

    fixture = TestBed.createComponent(AvisoWeb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
