import { Component, OnInit } from '@angular/core';
import { FRIENDS } from '../mocks';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  id: string;
  userName = '';
  friends = [];
  notFriends = [];
  friendRequests = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe(queryParams => {
      this.id = queryParams.get("id");

      for (let i = 0; i < FRIENDS.length; i++) {
        if (String(FRIENDS[i].id) === this.id) {
          this.userName = FRIENDS[i].fname;

          var arrayFriends = [];
          var arrayNotFriend = [];
          var arrayFriendRequests = [];


          //FRIENDS
          for (let y = 0; y < FRIENDS[i].friends.length; y++) {
            for (let z = 0; z < FRIENDS.length; z++) {
              if (FRIENDS[z].id === FRIENDS[i].friends[y]) {
                arrayFriends.push(FRIENDS[z]);
              }
            }
          }

          //POTENTIAL FRIENDS
          for (let a = 0; a < FRIENDS.length; a++) {
            if (FRIENDS[i].friends.indexOf(FRIENDS[a].id) === -1 && String(FRIENDS[a].id) !== this.id && FRIENDS[i].friendRequest.indexOf(FRIENDS[a].id) === -1) {
              arrayNotFriend.push(FRIENDS[a]);
            }
          }

          //FRIEND REQUESTS
          for (let y = 0; y < FRIENDS[i].friendRequest.length; y++) {
            for (let z = 0; z < FRIENDS.length; z++) {
              if (FRIENDS[z].id === FRIENDS[i].friendRequest[y]) {
                arrayFriendRequests.push(FRIENDS[z]);
              }
            }
          }

          this.friends = arrayFriends;
          this.notFriends = arrayNotFriend;
          this.friendRequests = arrayFriendRequests;
        }
      }
    });
  }

  profileUser() {
    for (let i = 0; i < FRIENDS.length; i++) {
      if (String(FRIENDS[i].id) === this.id) {
        return this.router.navigate(["/profile"], { queryParams: { id: String(FRIENDS[i].id) } });
      }
    }
  }



}
