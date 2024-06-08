import { HttpClient } from "@angular/common/http";
import { ChangeDetectorRef, Component, OnInit, inject } from "@angular/core";

@Component({
  selector: 'app-root',
  template:`
  <h2>Zoneless: Event Change Detection</h2>
  <app-count [Counter]='counter1'></app-count>
  <button (click)='CountIncrement()'>Add Count</button>
  <h2>Zoneless: Async Change Detection</h2>
  <div>Counter 2: {{ counter2 }}</div>
  `
})
export class AppComponent implements OnInit{

  counter1 = 1;
  counter2 = 0;
  cdr = inject(ChangeDetectorRef);

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.counter2 += 1;
      this.cdr.markForCheck();
    },1000);

  }

  CountIncrement(){
    this.counter1 = this.counter1 + 1; 
  }
}