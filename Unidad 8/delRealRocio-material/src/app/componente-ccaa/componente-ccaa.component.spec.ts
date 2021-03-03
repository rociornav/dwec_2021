import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCcaaComponent } from './componente-ccaa.component';

describe('ComponenteCcaaComponent', () => {
  let component: ComponenteCcaaComponent;
  let fixture: ComponentFixture<ComponenteCcaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteCcaaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCcaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
