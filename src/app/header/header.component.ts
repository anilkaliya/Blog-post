import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DialogComponent } from '../auth/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService,public dialog: MatDialog) { }
 isAuthenticated=false;
 isAuthListenSub:Subscription;
 message="";
  ngOnInit() {
    this.isAuthenticated=this.authService.getIsAuth();
    this.isAuthListenSub=this.authService.getIsAuthListener().
    subscribe(isAuthenticated=>{
      this.isAuthenticated=isAuthenticated;
    })
  }
  onlogout(){
    this.authService.Logout();
    this.message="You have been loggged out!";
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '250px',
        data: {message: this.message }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
       
      });
  }

}
