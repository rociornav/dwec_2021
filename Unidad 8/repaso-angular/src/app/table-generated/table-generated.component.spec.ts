import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGeneratedComponent } from './table-generated.component';

describe('TableGeneratedComponent', () => {
  let component: TableGeneratedComponent;
  let fixture: ComponentFixture<TableGeneratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGeneratedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
