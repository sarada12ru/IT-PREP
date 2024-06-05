import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditQuestionsAnswersComponent } from './add-edit-questions-answers.component';

describe('AddEditQuestionsAnswersComponent', () => {
  let component: AddEditQuestionsAnswersComponent;
  let fixture: ComponentFixture<AddEditQuestionsAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditQuestionsAnswersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditQuestionsAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
