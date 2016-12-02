import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  template: `
    <Label text="Home" class="h2 list-item"></Label>
    <Label text="My Profile" class="h2 list-item"></Label>
  `,
  styles: [`
    .list-item {
      background-color: #1f1f1f;
      border-bottom: 1px solid #2e2e2e;
      padding: 1rem;
      text-align: center;
    }
  `]
})

export class Sidebar {

  constructor() {
  }
}
