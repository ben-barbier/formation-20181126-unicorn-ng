import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornEditDialogComponent } from './unicorn-edit-dialog.component';

describe('UnicornEditDialogComponent', () => {
  let component: UnicornEditDialogComponent;
  let fixture: ComponentFixture<UnicornEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnicornEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicornEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
