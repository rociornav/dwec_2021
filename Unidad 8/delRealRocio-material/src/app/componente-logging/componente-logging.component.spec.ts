import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteLoggingComponent } from './componente-logging.component';

describe('ComponenteLoggingComponent', () => {
  let component: ComponenteLoggingComponent;
  let fixture: ComponentFixture<ComponenteLoggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteLoggingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteLoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
