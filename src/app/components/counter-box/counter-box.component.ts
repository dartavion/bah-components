import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter-box',
  templateUrl: './counter-box.component.html',
  styleUrls: ['./counter-box.component.sass']
})
export class CounterBoxComponent implements OnInit {
  @Input() counterValue;

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
