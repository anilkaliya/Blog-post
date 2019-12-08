import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog'; 
import { DialogComponent } from '../auth/dialog/dialog.component';

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatSidenavModule,
  MatFormFieldModule, 

} from "@angular/material";

@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule
  ],
 
  exports:[
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatDialogModule

  ],
  entryComponents: [
    DialogComponent
  ],
})
export class AngularMaterialModule { }
