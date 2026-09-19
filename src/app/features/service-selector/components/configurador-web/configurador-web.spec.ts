import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguradorWeb } from './configurador-web';
import { Web } from '../../models/web.model';

describe('ConfiguradorWeb', () => {
  let component: ConfiguradorWeb;
  let fixture: ComponentFixture<ConfiguradorWeb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguradorWeb],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguradorWeb);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('web', new Web(0, 0));
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
