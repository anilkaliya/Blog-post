import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [{path:"", component: PostListComponent},
  {path: 'api/posts', component: PostCreateComponent,canActivate:[AuthGuard]},
  {path:'edit/:postId',component:PostCreateComponent,canActivate:[AuthGuard]},
  {path:'auth',loadChildren:'./auth/auth.module#AuthModule'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
