import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthData } from './authData.model';
import { stringify } from '@angular/core/src/render3/util';
import { Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from "../../environments/environment.prod";


// const BACKEND_URL = environment.apiUrl + "/users/";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
private token:string;
private isAuthenticated=false;
private isAuthListener=new Subject<boolean>();
  constructor(private http:HttpClient,private router:Router) { }
  SignUp(name:string,password:string){
    const authData:AuthData={name:name,password:password};
    this.http.post<{message:string}>( "/api/users/signup" ,authData).
    subscribe(responseData=>{
      console.log("signup done");
      this.router.navigate(['/']);

    });


  }
  SignIn(name:string,password:string){
    const authData:AuthData={name:name,password:password};

    this.http.post<{token:string,Message:string}>
    ("/api/users/signin",authData)
    .subscribe(responseData=>{
      console.log("done");
      const token=responseData.token;
      this.token=token;
      if(token){
        this.isAuthenticated=true;
        this.isAuthListener.next(true);
        this.router.navigate(['/']);
      }
      
    })
  }
  getIsAuth(){
    return this.isAuthenticated;
  }
  getIsAuthListener(){
    return this.isAuthListener.asObservable();
  }
  getToken(){
    return this.token;
  }
  Logout(){
  
      this.token = null;
      this.isAuthenticated = false;
      this.isAuthListener.next(false);
    
      this.router.navigate(['/']);
  }
}
