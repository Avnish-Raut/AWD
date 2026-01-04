import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() messageFromParent = '';

  public number = 2;
  @Output() msgEvent = new EventEmitter<string>();

  myClickHandler() {
    this.number = this.number * this.number;
    this.msgEvent.emit(this.number.toString());
  }
}
