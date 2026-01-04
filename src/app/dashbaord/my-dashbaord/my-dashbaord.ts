import { Component } from '@angular/core';
import { Child } from '../../child/child';

@Component({
  selector: 'app-my-dashbaord',
  imports: [Child],
  templateUrl: './my-dashbaord.html',
  styleUrl: './my-dashbaord.css',
})
export class MyDashbaord {
  public number1: number = 10;
  public number2: number = 20;
  public result: number = this.number1 + this.number2;

  public emittedMessage: string = '';

  handleMessage(value: string) {
    this.emittedMessage = value;
  }
}
