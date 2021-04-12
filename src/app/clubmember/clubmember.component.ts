import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MEMBERS } from '../mock-members';

@Component({
  selector: 'app-clubmember',
  templateUrl: './clubmember.component.html',
  styleUrls: ['./clubmember.component.css']
})
export class ClubmemberComponent implements OnInit {

  members=MEMBERS;

  selectedMember?: Member;

  

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(member: Member): void {
    this.selectedMember = member;
  }
}


