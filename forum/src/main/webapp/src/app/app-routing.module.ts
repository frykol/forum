import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { OnePostComponent } from './one-post/one-post.component';

const routes: Routes = [
  {
    path: "",
    component: AllPostsComponent
  },
  {
    path: "add-post",
    component: AddPostComponent
  },
  {
    path: "post/:id",
    component: OnePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
