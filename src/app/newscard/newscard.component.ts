import { Component, Input, OnInit } from '@angular/core';
import { randomnews } from './news';

@Component({
  selector: 'app-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.css'],
})
export class NewscardComponent {
  @Input() item = randomnews;
  title: string = 'listNews';
  border: boolean = false;
  newsLine: string[] = [];

  addNews() {
    if (this.newsLine.length >= 10) {
      this.border = true;
    } else if (this.border) {
      this.border = false;
    } else {
      this.newsLine.push(this.item);
    }
  }

  removeAllNews() {
    if (this.border) {
      this.border = false;
    }
    this.newsLine = [];
  }

  removeNews() {
    if (this.border) {
      this.border = false;
    }
    this.newsLine.pop();
  }
}
