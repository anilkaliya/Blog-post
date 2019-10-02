import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 private message='';
  constructor(private authservice:AuthService,private route:ActivatedRoute,public dialog: MatDialog) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
     if(params.registered!==undefined && params.registered==='false'){
      this.message="Uh Oh Please Enter Valid Credentials";
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '250px',
        data: {message: this.message }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
       
      });
     }
      else if(params.User!==undefined && params.User==='false'){
        this.message="User Already Exists";
        const dialogRef = this.dialog.open(DialogComponent, {
          width: '250px',
          data: {message: this.message }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
         
        });
      }
     

    })
    
  }
  onSignUp(form:NgForm){
    if(form.invalid){
      return;
    }
    this.authservice.SignUp(form.value.email,form.value.password);
    }
  

}
