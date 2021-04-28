import { Component, OnInit } from '@angular/core';
import { ClubMembersService } from './clubmembers';
import { ProbaService } from './proba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor( private proba: ProbaService, private clubmem: ClubMembersService ) {
     {
    }
  }
ngOnInit(): void {
  this.getElements();
  // this.getMembers();
}

 public getElements(){
  this.proba.getData().subscribe(getClubs => {
    console.log(getClubs);
  });



  

//  public getMembers(){
//  this.clubmem.getMembers().subscribe(getMembers => {
//        console.log(getMembers);
//      });

   }

  title = 'Club Members';
  }
