import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent }      from './register/register.component';
import { LogInComponent }      from './log-in/log-in.component';
import { ProfileComponent }      from './profile/profile.component';
import { FriendsComponent }      from './friends/friends.component';

 const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logIn', component: LogInComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'friends', component: FriendsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
