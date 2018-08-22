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

  // Methods
  constructor() {
    this.sayHello();
    console.log(this.age);
    this.hasBirthday();
    console.log(this.age);
  }

  sayHello() {
    console.log(`Hello Mr. ${this.lastName}`);
  }

  hasBirthday() {
    this.age += 1;
  }
}