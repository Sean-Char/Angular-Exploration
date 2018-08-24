import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Wick',
        age: 35,
        address: {
          street: '444 Boogey Man Lane',
          city: 'Dallas',
          state: 'TX'
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName: 'Dak',
        lastName: 'Prescott',
        age: 21,
        address: {
          street: '555 Quarterback Rd',
          city: 'Frisco',
          state: 'TX'
        },
        isActive: false,
        registered: new Date('01/11/2017 06:20:00')
      },
      {
        firstName: 'Zeke',
        lastName: 'Elliot',
        age: 22,
        address: {
          street: '333 Runningback Blvd',
          city: 'Irving',
          state: 'TX'
        },
        isActive: true,
        registered: new Date('05/015/2016 03:40:00')
      }
    ];

    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
