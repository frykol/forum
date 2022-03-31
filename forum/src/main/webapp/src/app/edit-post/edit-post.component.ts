import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  public post: any = {};
  private siteId = 0;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    this.siteId = Number(this.route.snapshot.paramMap.get("id"));
    this.getPost();
    
  }

  getPost(){
    this.postService.getPostById(this.siteId).subscribe(
      (response: Post) => {this.post = response;},
      (error:HttpErrorResponse) => {alert(error);}
    )
  }

  editPost(post: Post){
    post.postComments = this.post.postComments;
    this.postService.updatePost(post).subscribe(
      (response: Post) => {console.log("edited"); this.router.navigate(["/"])},
      (error:HttpErrorResponse) => {alert(error);}
    )
  }

  reload(){
    window.location.reload();
  }
}
