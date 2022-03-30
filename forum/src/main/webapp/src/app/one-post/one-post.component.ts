import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private route: ActivatedRoute, private postService: PostService) { }

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

}
