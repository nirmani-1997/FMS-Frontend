import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {User} from "./user";
import { Observable } from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // username: string;
  // // public user: string[];
  // // users:string;
  // user: User;

  users: Observable<User[]>;

  constructor(private login:LoginService){

  }

  ngOnInit() {

    this.users=this.login.getUser();

    // this.user = new User();
    // this.user=this.login.getUser();
    // console.log('user123' + this.user);
    // console.log('user123' + this.user.username);
    // this.username= this.user.username;
    // this.users=user;
    // this.user.forEach(i =>{
    //   console.log('username' + i);
    // });

   /* this.login.getCurrentUser().subscribe(
      (user:any)=>{
        this.user=user;
      },
      (error)=>{
        alert('error');
      }
    );*/

  }

}
