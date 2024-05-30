import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
              <h1>{{title}}</h1>
              <hr>
              <p>{{counter}}</p>



              <button (click)="increment(-1)">-1</button>
              <button (click)="resetCounter()">reset</button>
              <button (click)="increment(+1)">+1</button>
            `
})
export class CounterComponent {
  public title: string = 'CONTADOR';
  public counter: number = 0;
  increment(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 0;
  }
}
