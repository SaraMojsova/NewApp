import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

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
        return this.http.get<AuthResponseData>('http://localhost:8080/api/members'

        
        ).pipe(catchError(errorRes => {
            let errorMessage = 'An unknown error occurred!';
            if (errorRes.error || !errorRes.error.error){
                return throwError(errorMessage);

            }
            switch(errorRes.error.error.message){
                case 'EMAIL_EXISTS':
                errorMessage='This email already exists';
            }
            return  throwError(errorMessage);
        })) }
    
    
    }
