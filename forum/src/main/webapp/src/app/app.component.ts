import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public posts: any = {};

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

  title = 'webapp';
}
