import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ClubMembersService } from './clubmembers';
import { Member } from './member';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public members!: Member[];
  constructor( private clubmem: ClubMembersService, private authService:AuthService ) {
     
  }
ngOnInit(): void {
this.authService.autoLogin();
}
}