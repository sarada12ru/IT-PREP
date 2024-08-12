import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsAnswersFilterComponent } from './questions-answers-filter.component';

describe('QuestionsAnswersFilterComponent', () => {
  let component: QuestionsAnswersFilterComponent;
  let fixture: ComponentFixture<QuestionsAnswersFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsAnswersFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsAnswersFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
