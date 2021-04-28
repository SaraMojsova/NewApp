import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
  })

  export class ClubMembersService {
     constructor(
         private http: HttpClient
     ){}
     

     public getMembers() {
         return this.http.get<any>('localhost:8080/api/members')
     }
    }