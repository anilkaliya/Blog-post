import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 private message='';
  constructor(private authservice:AuthService,private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      if(params.registered!==undefined && params.registered==='false')
      this.message="Uh Oh Please Enter Valid Credentials";
    })
    
  }
  onSignUp(form:NgForm){
    if(form.invalid){
      return;
    }
    this.authservice.SignUp(form.value.email,form.value.password);
    }
  

}
