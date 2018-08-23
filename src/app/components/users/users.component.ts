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
  currentClasses = {};
  currentStyles = {};

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
        image: 'https://placeimg.com/600/600/people/5',
        isActive: true
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
        image: 'https://placeimg.com/600/600/people/2',
        isActive: false
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
        image: 'https://placeimg.com/600/600/people/1',
        isActive: true
      }
    ];

    this.loaded = true;

    // this.addUser({
    //   firstName: 'Allen',
    //   lastName: 'Hurns'
    // });

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    };
  }
}
