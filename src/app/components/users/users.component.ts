import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: "John",
        lastName: "Wick",
        age: 35,
        address: {
          street: "444 Boogey Man Lane",
          city: "Dallas",
          state: "TX"
        }
      },
      {
        firstName: "Dak",
        lastName: "Prescott",
        age: 21,
        address: {
          street: "555 Quarterback Rd",
          city: "Frisco",
          state: "TX"
        }
      },
      {
        firstName: "Zeke",
        lastName: "Elliot",
        age: 22,
        address: {
          street: "333 Runningback Blvd",
          city: "Irving",
          state: "TX"
        }
      }
    ];

    this.addUser({
      firstName: "Allen",
      lastName: "Hurns",
      age: 22,
      address: {
        street: "7777 WideReceiver St",
        city: "Las Colinas",
        state: "TX"
      }
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
