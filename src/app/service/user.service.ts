import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private host = environment.apiUrl;

  constructor(private http: HttpClient) { }

//  user list service call
  public getUsers() {
    const headers = new HttpHeaders().set('Token' , environment.token);
    return this.http.get<any>(`${this.host}/api/members`, {headers});
  }

}
