import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private postService: PostService) {}

  ngOnInit(){
    this.getAllPosts();
  }

  public getAllPosts(): void{
    this.postService.getAllPosts().subscribe(
      (response: Post[]) => {this.posts = response},
      (error: HttpErrorResponse) => {alert(error)}
    );
  }

  public countComments(post: Post){
    let num = 0;
    post.postComments.forEach(() => {
      num++;
    })
    return `${num}`;
  }
}
