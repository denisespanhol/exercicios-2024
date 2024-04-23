import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-forms-component',
  templateUrl: './create-forms-component.component.html',
  styleUrls: ['./create-forms-component.component.scss']
})
export class CreateFormsComponentComponent implements OnInit {
  @Input() visible!: boolean;
  @Output() changeVisibleEvent = new EventEmitter<boolean>();

  waitingFeedback: boolean = false;

  onFeedbackClick()
  {
    this.waitingFeedback = !this.waitingFeedback;
  }

  onclick()
  {
    this.visible = !this.visible;
    this.changeVisibleEvent.emit(this.visible);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
