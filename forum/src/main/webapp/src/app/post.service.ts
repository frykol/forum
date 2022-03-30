import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  public getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.apiUrl}/posts/all`);
  }

  public getPostById(id: number): Observable<Post>{
    return this.http.get<Post>(`${this.apiUrl}/posts/post/${id}`);
  }

  public addPost(post: Post): Observable<Post>{
    return this.http.post<Post>(`${this.apiUrl}/posts/add`, post);
  }

  public updatePost(post: Post): Observable<Post>{
    return this.http.put<Post>(`${this.apiUrl}/posts/update`, post);
  }

  public deletePost(id: Number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/posts/delete/${id}`);
  }
}
