import { Component, OnInit } from '@angular/core';
import { ClubMembersService } from './clubmembers';
import { Member } from './member';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public members!: Member[];
  constructor( private clubmem: ClubMembersService ) {
     {
    }
  }
ngOnInit(): void {
}
}