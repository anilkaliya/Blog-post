import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostCreateComponent } from '../post/post-create/post-create.component';
import { PostListComponent } from '../post-list/post-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { Routes, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PostListComponent,
    PostCreateComponent],
  imports: [
    ReactiveFormsModule,
    AngularMaterialModule,
    CommonModule,
    RouterModule
  ]
})
export class PostModule { }
