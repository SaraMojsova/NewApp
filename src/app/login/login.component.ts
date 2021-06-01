import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../model/user';
import { AuthenticationService } from '../service/authentication.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

public showLoading!: boolean;
private subscriptions: Subscription[]=[];

  ngOnInit(): void {
    if(this.authenticationService.isUserLoggedIn()){
      this.router.navigateByUrl('/members');
    }
    else{
      this.router.navigateByUrl('/login');
    }
  }

  public onLogin(user : User): void{
    this.showLoading=true;
    console.log(user);
    this.subscriptions.push(
      this.authenticationService.login(user).subscribe(
        (response: any) => {
          //  //KEY NA JWT TOKEN OD BACKEND
          const headers = new HttpHeaders().set('Token' , environment.token);
          const token=response.headers.get(headers);
          this.authenticationService.saveToken(token);
          this.authenticationService.addUserToLocalCache(response.body);
          this.router.navigateByUrl('/members');
          this.showLoading=false;
        }
      )
    )
  }

}
