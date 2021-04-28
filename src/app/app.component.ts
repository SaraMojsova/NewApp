import { Component, OnInit } from '@angular/core';
import { ClubMembersService } from './clubmembers';
import { Member } from './member';
import { MemberService } from './member.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public members!: Member[];
  constructor( private service: MemberService, private clubmem: ClubMembersService ) {
     {
    }
  }
ngOnInit(): void {
  this.getElements();
  // this.getMembers();
}

 public getElements():void{
  this.service.getMembers().subscribe(
    (response: Member[]) => {
      console.log(response)
      this.members = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
 }
}