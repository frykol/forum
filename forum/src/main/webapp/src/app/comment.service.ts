import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getCommentById(id: number): Observable<Comment>{
    return this.http.get<Comment>(`${this.apiUrl}/comments/comment/${id}`);
  }
  public addComment(comment: Comment): Observable<Comment>{
    return this.http.post<Comment>(`${this.apiUrl}/comments/add`, comment);
  }
  public deleteComment(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/comments/delete/${id}`);
  }
  public updateComment(comment: Comment): Observable<Comment>{
    return this.http.put<Comment>(`${this.apiUrl}/comments/update`, comment);
  }
}
