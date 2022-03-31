import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public best: any[] = [];
  public bestToShow: any = [];
  currentRoute: string = "";

  constructor(private postService: PostService, private router: Router) { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          this.getAllPosts();
      }
    });
  }

  ngOnInit(): void {
    this.getAllPosts();
    
  }

  getAllPosts(){
    this.postService.getAllPosts().subscribe(
      (response: Post[]) => {this.best = response;this.sortArray(this.best);},
      (error: HttpErrorResponse) => {alert(error);}
    )
  }

  sortArray(array: Array<Post>){
    //array.sort((n1, n2) => {
      //n1.postComments.length
    //})
    console.log(this.best);
    for(let i = 0; i < this.best.length; i++){
      for(let j = 0; j < (this.best.length - i - 1); j++){
        if(this.best[j].postComments.length < this.best[j+1].postComments.length){
          let temp = this.best[j];
          this.best[j] = this.best[j+1];
          this.best[j+1] = temp;
        }
      }
    }
    console.log(this.best);
    this.bestToShow = this.best.splice(0, 5);
    console.log(this.bestToShow);
  }
}
