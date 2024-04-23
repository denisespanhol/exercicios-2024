import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-forms-component',
  templateUrl: './create-forms-component.component.html',
  styleUrls: ['./create-forms-component.component.scss']
})
export class CreateFormsComponentComponent implements OnInit {
  @Input() visible!: boolean;
  @Input() waitingFeedback!: boolean;

  @Output() changeVisibleEvent = new EventEmitter<boolean>();
  @Output() changeWaitingEvent = new EventEmitter<boolean>();

  onclick()
  {
    this.waitingFeedback = !this.waitingFeedback;
    this.visible = !this.visible;
    this.changeWaitingEvent.emit(this.waitingFeedback);
    this.changeVisibleEvent.emit(this.visible);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
