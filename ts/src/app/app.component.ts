import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  createTopicWasClicked: boolean = true;
  visible: boolean = false;

  onclick()
  {
    this.createTopicWasClicked = !this.createTopicWasClicked;
    this.visible = !this.visible;
  }

  title = 'DevChuva';
}
