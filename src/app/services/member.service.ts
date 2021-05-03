import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Member } from '../member';
// import {catchError, map} from "rxjs/operators";
// 
export interface MemberData{
  items:Member[],
   
};
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public members!: Member[];
  constructor(private http :HttpClient) { }

  // findAll(page:number,size:number): Observable<any>{
  //   let params = new HttpParams();
    
  //   params= params.append('page', String(page));
  //   params= params.append('limit', String(size));
 
  //   return this.http.get('localhost:8080/api/members', {params}).pipe(
  //     map((memberData: MemberData)=> memberData),
  //     catchError(err => throwError(err))
  //   )
    
  // }

  public getMembers():Observable<Member[]> {
    return this.http.get<Member[]>(`http://localhost:8080/api/members`)
  }
}
