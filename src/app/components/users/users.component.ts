import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Wick',
        email: 'jwick@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Dak',
        lastName: 'Prescott',
        email: 'DakP@yahoo.com',
        isActive: false,
        registered: new Date('01/11/2017 06:20:00'),
        hide: true
      },
      {
        firstName: 'Zeke',
        lastName: 'Elliot',
        email: 'ZekeE@gmail.com',
        isActive: true,
        registered: new Date('05/015/2016 03:40:00'),
        hide: true
      }
    ];

    this.loaded = true;
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   };
  // }

  onSubmit(e) {
    console.log(123);
    e.preventDefault();
  }
}
