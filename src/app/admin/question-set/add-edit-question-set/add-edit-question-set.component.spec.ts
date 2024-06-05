import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditQuestionSetComponent } from './add-edit-question-set.component';

describe('AddEditQuestionSetComponent', () => {
  let component: AddEditQuestionSetComponent;
  let fixture: ComponentFixture<AddEditQuestionSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditQuestionSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditQuestionSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
