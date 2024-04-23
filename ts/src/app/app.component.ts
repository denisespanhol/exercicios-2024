import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  createTopicWasClicked: boolean = true;
  visible: boolean = false;
  waitingFeedback: boolean = false;

  onclick()
  {
    this.createTopicWasClicked = !this.createTopicWasClicked;
    this.visible = !this.visible;
  }

  changeVisible(isVisible: boolean)
  {
    this.visible = isVisible;
  }

  changeWaiting(isVisible: boolean)
  {
    this.waitingFeedback = isVisible;
  }

  title = 'DevChuva';
}
