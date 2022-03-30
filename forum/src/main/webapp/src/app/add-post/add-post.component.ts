import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  public addPost(form: NgForm){
    this.postService.addPost(form.value).subscribe(
      (response: Post) => {console.log("added"); this.router.navigate(["/"])},
      (error: HttpErrorResponse) => {alert(error);}
    )
  }

}
