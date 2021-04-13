import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JokesService } from './chuckapi/jokes.service';
import { SnackComponent } from './snack/snack.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jokes:any[] = [];
  categories:any[] = [];

  constructor(private jokesService: JokesService, private snackBar: MatSnackBar ) {}

ngOnInit() {
  this.jokesService.getCategories()
  .subscribe((categories:any) => {
    this.categories=categories

  });

  this.jokesService.getRandomJoke()
  .subscribe(joke => {
    this.jokes.push(joke);
  });
}

  title = 'Club Members';

  
  openSnackBar() {
    this.snackBar.openFromComponent(SnackComponent, {
      duration: 500,
    });
  }

  searchByCategory(category: string){
    this.jokesService.getCategoryJoke(category)
    .subscribe(joke => {
      this.jokes=[];
      this.jokes.push(joke);
    }

      
      )
  }
}




