import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'my-app';
  user: any;

  constructor(
    private userService: UserService
  ){

  }

  ngOnInit() {
this.getUsers();

  }


  getUsers(){
    this.userService.getUsers().subscribe(res => {
console.log(res);
this.user = res;
    })
  }
}
