import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpErrorResponse
  } from "@angular/common/http";
  import { Injectable } from "@angular/core";
import { catchError } from 'rxjs/operators';
import { MatDialog } from "@angular/material";
import { throwError } from 'rxjs';
import { DialogComponent } from './auth/dialog/dialog.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
   
  constructor(private dialog: MatDialog){}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    return next.handle(req).pipe(catchError((error: HttpErrorResponse) => {
      let errorMessage = "Uh oh An Error Occured";
      console.log(error.error.message);
      if (error) {
        errorMessage = error.error.message? 
        error.error.message : error.error.error.errors.email.message;
      }
      this.dialog.open(DialogComponent, { data: { message: errorMessage } });
      return throwError(error);

    }));

  }
  }
  