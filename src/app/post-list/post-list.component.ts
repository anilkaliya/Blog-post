import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';
import { Subscription } from 'rxjs';
import { Post } from '../post/post.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
 postSub:Subscription;
 posts:Post[]=[];
 movieArray:any;
 isAuthenticated=false;
 authSub:Subscription;
 private imageUrl="http://image.tmdb.org/t/p/w300";
  constructor(private postService:PostService,private authService:AuthService) { }

  ngOnInit() {
    this.postService.getPosts();
    this.postService.getList().subscribe(data=>{
      this.movieArray=data;
    })
     
    
    this.postSub=this.postService.getPostUpdateListener().
    subscribe(postData=>{
      this.posts=postData.posts;

    });
    this.isAuthenticated=this.authService.getIsAuth();
   this.authSub= this.authService.getIsAuthListener().subscribe(isAuthenticated=>{
      this.isAuthenticated=isAuthenticated;
    });

  }
  onDelete(postId:string){
    this.postService.Delete(postId).subscribe(()=>{
      this.postService.getPosts();
    });
  }

}
