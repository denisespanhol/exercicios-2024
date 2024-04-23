import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormsComponentComponent } from './create-forms-component.component';

describe('CreateFormsComponentComponent', () => {
  let component: CreateFormsComponentComponent;
  let fixture: ComponentFixture<CreateFormsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFormsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFormsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
