import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // Properties
  firstName: string;
  lastName: string;
  age: number;
  address;

  foo: any;
  hasKids: boolean;
  numberArray: number[];
  stringArray: string[];
  mixedArray: any[];
  myTuple: [string, number, boolean];
  unusable: void;
  u: undefined;
  n: null;

  // Methods
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Wick';
    this.age = 34;
    this.address = {
      street: '444 Boogey Man Lane',
      city: 'Dallas',
      state: 'TX'
    }

    this.foo = 32, 'hello', [1,'two',4],{greeting: 'hello'};
    this.hasKids = true;
    this.numberArray = [1,2,3,4];
    this.stringArray = ['one','two','three'];
    this.mixedArray = ['one', 2, { number: 3 }, undefined];
    this.myTuple = ['hello', 1, true];
    this.unusable = undefined;
    this.u = undefined;
    this.n = null;

    console.log(this.addNumbers(2, 3));
  }

  showAge() {
    return this.age + 2;
  }

  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }
}