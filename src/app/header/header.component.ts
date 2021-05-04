import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  entries=[
    {
    name:'Login',
    link:'login'
    },
    {
      name:'Register',
    link:'register'
    }
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateTo(value){
    this.router.navigate(['../', value])
  }

}