import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  onSignIn(form:NgForm){
    if(form.invalid){
      return;
}
console.log(form.value.email);
    this.authService.SignIn(form.value.email,form.value.password);
  }

}
