import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable()
export class DataService {
  users: User[];

  constructor() {
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
  }

  getUsers(): User[] {
    console.log('Fetching users from service...');

    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

}
