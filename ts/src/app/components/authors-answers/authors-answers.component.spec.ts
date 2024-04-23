import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsAnswersComponent } from './authors-answers.component';

describe('AuthorsAnswersComponent', () => {
  let component: AuthorsAnswersComponent;
  let fixture: ComponentFixture<AuthorsAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsAnswersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorsAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
