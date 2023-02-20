import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private API_COMMENTS = 'http://ec2-44-204-184-149.compute-1.amazonaws.com/api/comment';

  constructor(private http: HttpClient, private authService: AuthService) { }

  public getAllComments(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    return this.http.get(`${this.API_COMMENTS}/?ordering=-created`, { headers });
  }

  public getCommentsByArticle(articleId: number): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    return this.http.get(`${this.API_COMMENTS}/?article=${articleId}&ordering=-created`, { headers });
  }

  public postComment(articleId: number, comment: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    const body = { article: articleId, comment: comment };
    return this.http.post(this.API_COMMENTS, body, { headers });
  }

  public deleteComment(commentId: number): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    return this.http.delete(`${this.API_COMMENTS}/${commentId}`, { headers });
  }
}

