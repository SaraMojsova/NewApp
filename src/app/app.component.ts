import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from './snack/snack.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jokes:any[] = [];
  categories:any[] = [];

  constructor( private snackBar: MatSnackBar ) {}

ngOnInit() {
  
  subscribe((categories:any) => {
    this.categories=categories

  });

   
}
  title = 'Club Members';


  openSnackBar() {
    this.snackBar.openFromComponent(SnackComponent, {
      duration: 500,
    });
  }
      
  }


function subscribe(arg0: (categories: any) => void) {
  throw new Error('Function not implemented.');
}

