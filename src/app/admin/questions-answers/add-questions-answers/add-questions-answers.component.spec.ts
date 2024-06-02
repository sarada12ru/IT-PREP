import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionsAnswersComponent } from './add-questions-answers.component';

describe('AddQuestionsAnswersComponent', () => {
  let component: AddQuestionsAnswersComponent;
  let fixture: ComponentFixture<AddQuestionsAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuestionsAnswersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQuestionsAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
