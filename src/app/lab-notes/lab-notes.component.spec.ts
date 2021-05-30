import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabNotesComponent } from './lab-notes.component';

describe('LabNotesComponent', () => {
  let component: LabNotesComponent;
  let fixture: ComponentFixture<LabNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
