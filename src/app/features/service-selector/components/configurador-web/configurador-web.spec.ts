import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguradorWeb } from './configurador-web';

describe('ConfiguradorWeb', () => {
  let component: ConfiguradorWeb;
  let fixture: ComponentFixture<ConfiguradorWeb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguradorWeb],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguradorWeb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
