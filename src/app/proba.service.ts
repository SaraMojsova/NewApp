import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class ProbaService {

  constructor(
    private http:HttpClient
  ) {}
  
  public getData(): Observable<Member[]>{
    return this.http.get<Member[]>('localhost:8080/api/members')

  } 

}
