import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count',
  template: `
  <h3>Count in child component: {{Counter}}</h3>
  `
})
export class ChildComponent {
  @Input() Counter: any;
  constructor() { }
}