import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
    public members!: Member[];
  constructor(private http: HttpClient) { }

  

  public getMembers():Observable<Member[]> {
    return this.http.get<Member[]>(`http://localhost:8080/api/members`)
  }

}
