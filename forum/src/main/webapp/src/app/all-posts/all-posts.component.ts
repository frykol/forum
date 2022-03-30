import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  public posts: any = {};
  public commentsNumber: Number = 0;

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(){
    this.getAllPosts();
  }

  public getAllPosts(): void{
    this.postService.getAllPosts().subscribe(
      (response: Post[]) => {this.posts = response},
      (error: HttpErrorResponse) => {alert(error)}
    );
  }

  public deletePost(id: number){
    console.log(id);
    this.postService.deletePost(id).subscribe(
      (response: void) => {console.log(response), this.reload()},
      (error:HttpErrorResponse) => {alert(error)}
   )
  }

  reload(){
    let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
  }

  public countComments(post: Post){
    let num = 0;
    post.postComments.forEach(() => {
      num++;
    })
    return `${num}`;
  }
}
