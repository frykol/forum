import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../comment.service';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {

  public post: any = [];
  public siteId: number = 0;
  public currentComment: any = {};

  constructor(private router: Router, private route: ActivatedRoute, private postService: PostService, private commentService: CommentService) { }

  ngOnInit(): void {
    this.siteId = Number(this.route.snapshot.paramMap.get("id"));
    this.getPost(this.siteId);
  }

  getPost(id:number){
    this.postService.getPostById(id).subscribe(
      (response: Post) => {this.post = response},
      (error: HttpErrorResponse) => {alert(error)}
    )
  }

  public deleteComment(id: number){
    this.commentService.deleteComment(id).subscribe(
      (response: void) => {console.log("usunięto"); this.reload()},
      (error: HttpErrorResponse) => {alert(error);}
    )
  }

  public addComment(form: NgForm){
    this.commentService.addComment(form.value).subscribe(
      (respose: Comment) => {console.log("added"); this.currentComment = respose ;this.assignComment(this.siteId, this.currentComment.id)},
      (error: HttpErrorResponse) => {alert(error + " przy dodawaniu");}
    )
  }

  public assignComment(postId:number, commentId:number){
    this.postService.addCommentToPost(postId, commentId, this.post).subscribe(
      (response: Post) => {console.log("przypisano"); this.reload()},
      (error: HttpErrorResponse) => {alert(error + " przy przypisywaniu");}
    )
  }

  reload(){
    window.location.reload();
  }
}
