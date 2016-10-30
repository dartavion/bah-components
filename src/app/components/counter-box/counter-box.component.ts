import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-box',
  templateUrl: './counter-box.component.html',
  styleUrls: ['./counter-box.component.sass']
})
export class CounterBoxComponent implements OnInit {
  counterValue = 1;
  constructor() { }

  ngOnInit() {
  }

  onIncrement() {
    this.counterValue += 1;
  }

  onDecrement() {
    this.counterValue -= 1;
  }

}
