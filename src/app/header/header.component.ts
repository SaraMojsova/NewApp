import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
isAuthenticated=false;
  private userSub: Subscription;
  entries=[
    {
    name:'Login',
    link:'login'
    },
    {
      name:'Register',
    link:'register'
    }
  ];

  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub= this.authService.user.subscribe(user=>{
    this.isAuthenticated=!!user;
    console.log(!user);
    console.log(!!user);


    });
  }


  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
  navigateTo(value){
    this.router.navigate(['../', value])
  }
  onLogout(){
    this.authService.logout();
  }
}
