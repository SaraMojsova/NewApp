import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MEMBERS } from '../mock-members';
import { MemberService } from '../member.service'
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-clubmember',
  templateUrl: './clubmember.component.html',
  styleUrls: ['./clubmember.component.css']
})
export class ClubmemberComponent implements OnInit {

  public members!: Member[];

  selectedMember?: Member;

  

  constructor(private MemberService:MemberService){
  }

  ngOnInit() {
    this.getMembers()
  }
  public getMembers(): void {
    this.MemberService.getMembers().subscribe(
      (response: Member[]) => {
        console.log(response)
        this.members = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}


