import { Component } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // Properties
  user: User;

  // Methods
  constructor() {
    this.user = {
      firstName: 'John',
      lastName: 'Wick',
      age: 35,
      address: {
        street: '444 Boogey Man Lane',
        city: 'Dallas',
        state: 'TX'
      }
    }
  }
}

