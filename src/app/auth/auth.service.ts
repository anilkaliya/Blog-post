import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthData } from './authData.model';
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
  SignUp(email:string,password:string){
    const authData:AuthData={email:email,password:password};
    this.http.post<{message:string}>("/api/users/signup",authData).
    subscribe(responseData=>{
      if(responseData.message==='Done'){
        this.router.navigate(['auth/signin'],{queryParams:{registered:'true'}})
      
     }
    },error=>{
               this.router.navigate(['auth/signup'],{queryParams:{regiesterd:'false'}});
     });
    }
  SignIn(email:string,password:string){
    const authData:AuthData={email:email,password:password};

    this.http.post<{message:String,token:string,expiresIn:string}>
    ("/api/users/signin",authData)
    .subscribe(responseData=>{
      const token=responseData.token;
      this.token=token;
      
      if(token){
        this.isAuthenticated=true;
        this.isAuthListener.next(true);
        this.router.navigate(['/']);
      }
 
    },error=>{
      
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
