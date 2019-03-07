import { Component, OnInit } from '@angular/core';
import { FRIENDS } from '../mocks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})



export class LogInComponent implements OnInit {

  email: string = '';
  passw: string = '';
  userId: string;

  constructor(private router: Router) {

  }
  onSubmit() {
    for (let i = 0; i < FRIENDS.length; i++) {
      if (FRIENDS[i].email === this.email && FRIENDS[i].passw === this.passw) {
        
        this.userId = String(FRIENDS[i].id);
        this.router.navigate(["/profile"], { queryParams: { id: this.userId } });
      }
    }
  }

  ngOnInit() { 

  }

}


