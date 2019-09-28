import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
private message='';
  constructor(private authService:AuthService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      console.log(params);
      if(params.registered!==undefined && params.registered==='true'){
        this.message="You have registered !! Please proceed to signin";
      }
      else if(params.User!==undefined && params.User==='false'){
        this.message="User Does not exist";
      }
      else if(params.password!==undefined && params.password==='false'){
        this.message="Please enter correct password";
      }
    });
    
 
  }
  onSignIn(form:NgForm){
    if(form.invalid){
      return;
}
    this.authService.SignIn(form.value.email,form.value.password);
  }

}