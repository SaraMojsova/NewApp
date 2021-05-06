import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
    kind:string;
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
}

@Injectable({providedIn:'root'})
export class AuthService {
    constructor(private http: HttpClient) {}


    signup(email: string, password: string){
        return this.http.get<AuthResponseData>('http://localhost:8080/api/members') }}
