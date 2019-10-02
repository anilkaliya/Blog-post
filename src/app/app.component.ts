import { Component,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Blog-app';
  isAuthenticated=false;
 isAuthListenSub:Subscription;

 constructor(private authService:AuthService){

 }
  ngOnInit() {
    this.isAuthenticated=this.authService.getIsAuth();
    this.isAuthListenSub=this.authService.getIsAuthListener().
    subscribe(isAuthenticated=>{
      this.isAuthenticated=isAuthenticated;
    })
  }
}
