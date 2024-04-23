import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-more-button',
  templateUrl: './show-more-button.component.html',
  styleUrls: ['./show-more-button.component.scss']
})
export class ShowMoreButtonComponent implements OnInit {
  showMore = false;
  showButton = true;

  toggleShowMore() {
    this.showMore = !this.showMore;
    this.showButton = !this.showButton;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
