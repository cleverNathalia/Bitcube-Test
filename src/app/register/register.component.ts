import { Component, OnInit } from '@angular/core';
import { Md5 } from "md5-typescript";

import { FRIENDS } from '../mocks';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname: string;
  lname: string;
  email: string;
  passw: string;
  passwRe: string;

  constructor() {

  }

  ngOnInit() {
    document.getElementById("errorNotify").style.display = 'none';
    document.getElementById("emailExist").style.display = 'none';
  }

  sumbitRegister() {

    var firstPassw = document.getElementById("passw");
    var rePassw = document.getElementById("passwRe");
    if (firstPassw === rePassw) {
      // PASSWORD GETS ENCRYPTED HERE
      var encryptedPassword = Md5.init(firstPassw);
    }

    if (this.fname === undefined
      || this.lname === undefined
      || this.email === undefined
      || this.passw === undefined
      || this.passwRe === undefined) {
      document.getElementById("errorNotify").style.display = 'block';
      setTimeout(function () {
        document.getElementById("errorNotify").style.display = 'none';
      }, 2000);
    }

    for (let i = 0; i < FRIENDS.length; i++) {
      if(FRIENDS[i].email === this.email){
        document.getElementById("emailExist").style.display = 'block';
        document.getElementById("errorNotify").style.display = 'none';
        setTimeout(function () {
          document.getElementById("emailExist").style.display = 'none';
        }, 2000);
      }

    }
  }

}

