import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // Properties
  firstName = 'John';
  lastName = 'Wick';
  age = 34;
  address = {
    street: '444 Boogyman Lane',
    city: 'Dallas',
    state: 'TX'
  };

  // Methods
  constructor() {
    
  }

  showAge() {
    return this.age + 2;
  }
}