import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../member';
import { MEMBERS } from '../mock-members';

import { MemberData, MemberService } from '../services/member.service';
import {catchError, map} from "rxjs/operators";
import { HttpErrorResponse } from '@angular/common/http';
// import { HttpErrorResponse, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  public members!: Member[];

  selectedMember?: Member;
  @Input() member?: Member;

  dataSource: MemberData=null;
  displayedColumns:string[]=['id','name','surname','age','phone','email','gender','language','occupation','company','username','password']

  constructor(private memberService:MemberService) { }

  ngOnInit(): void {
    // this.initDataSource();
    // this.getMembers()
    this.memberService.getMembers().subscribe((response)=>{
      this.members=response;
    })
  }

  // initDataSource(){
  //   this.memberService.findAll(1,10).pipe(
  //     map((memberData: MemberData)=> this.dataSource=memberData)
  //   ).subscribe();
  // }
    public getMembers(): void {
    this.memberService.getMembers().subscribe(
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
