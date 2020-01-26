import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
private message='';
  constructor(private authService:AuthService,private route:ActivatedRoute,public dialog: MatDialog) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      console.log(params);
      if(params.registered!==undefined && params.registered==='true'){
        this.message="You have registered !! Please proceed to signin";
        const dialogRef = this.dialog.open(DialogComponent, {
          width: '250px',
          data: {message: this.message }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
         
        });
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