import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessTopicSentComponent } from './success-topic-sent.component';

describe('SuccessTopicSentComponent', () => {
  let component: SuccessTopicSentComponent;
  let fixture: ComponentFixture<SuccessTopicSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessTopicSentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessTopicSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
