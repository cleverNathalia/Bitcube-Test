import { Component, OnInit } from '@angular/core';
import { FRIENDS } from '../mocks';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: string;
  f_name: string;
  l_name: string;
  email_: string;
  curr_Pass: string;
  new_Pass: string;
  rep_Pass: string;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    document.getElementById("notify").style.display = "none";
    document.getElementById("errorNotify").style.display = "none";
    document.getElementById("notifyNew").style.display = "none";
    document.getElementById("errorNotifyNew").style.display = "none";

    this.route.queryParamMap.subscribe(queryParams => {
      this.id = queryParams.get("id");

      for (let i = 0; i < FRIENDS.length; i++) {
        if (String(FRIENDS[i].id) === this.id) {

          this.f_name = FRIENDS[i].fname;
          this.l_name = FRIENDS[i].lname;
          this.email_ = FRIENDS[i].email;

        }
      }
    });
  }



  notifyUpdate() {
    document.getElementById("notify").style.display = 'block';
    setTimeout(function () {
      document.getElementById("notify").style.display = 'none';
    }, 2000);
  }

  notifyError() {
    document.getElementById("errorNotify").style.display = 'block';
    setTimeout(function () {
      document.getElementById("errorNotify").style.display = 'none';
    }, 2000);
  }


  slideDownPassword() {
    for (let i = 0; i < FRIENDS.length; i++) {
      if (String(FRIENDS[i].id) === this.id) {
        if (this.curr_Pass === FRIENDS[i].passw) {

          var currentPass = document.getElementById("currentPass");
          var newPass = document.getElementById("newPass");
          currentPass.style.display = "none";
          newPass.style.display = "block";

        } else {

          this.notifyError();

        }
      }
    }
  }

  newPassword() {
    this.new_Pass = "";
    this.rep_Pass = "";
    this.curr_Pass = "";

    var check = false;

    if (this.new_Pass === this.rep_Pass && this.new_Pass != undefined && this.rep_Pass != undefined) {

      document.getElementById("currentPass").style.display = "block";
      document.getElementById("newPass").style.display = "none";

      document.getElementById("notifyNew").style.display = 'block';
      setTimeout(function () {
        document.getElementById("notifyNew").style.display = 'none';
      }, 2000);

    } else {
      document.getElementById("errorNotifyNew").style.display = 'block';
      setTimeout(function () {
        document.getElementById("errorNotifyNew").style.display = 'none';
      }, 2000);
    }
  }

  friendsUser() {
    for (let i = 0; i < FRIENDS.length; i++) {
      if (String(FRIENDS[i].id) === this.id) {
        return this.router.navigate(["/friends"], { queryParams: { id: String(FRIENDS[i].id) } });
      }
    }
  }

}
