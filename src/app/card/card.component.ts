import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Output() public newsCard = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  addEvent() {
    this.newsCard.emit('Card');
  }
}
