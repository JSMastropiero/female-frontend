import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private API_ARTICLES = 'http://ec2-44-204-184-149.compute-1.amazonaws.com/api/article/';
  private API_SEARCH_ARTICLES = 'http://ec2-44-204-184-149.compute-1.amazonaws.com/api/article/';
  private API_MOST_READ = 'http://ec2-44-204-184-149.compute-1.amazonaws.com/api/article/';

  constructor(private http: HttpClient, private authService: AuthService) { }

  public getAllArticles(): Observable<any> {
    const token = this.authService.getToken();
    const headers = { Token: `${token}` };
    return this.http.get(this.API_ARTICLES, { headers });
  }

  public searchArticles(query: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = { Token: `${token}` };
    const params = new HttpParams().set('search', query).set('ordering', '-created');
    return this.http.get(this.API_SEARCH_ARTICLES, { headers, params });
  }

  public getLastArticle(): Observable<any> {
    const token = this.authService.getToken();
    const headers = { Token: `${token}` };
    const params = new HttpParams().set('ordering', '-created').set('page_size', '1');
    return this.http.get(this.API_ARTICLES, { headers, params });
  }

  public getArticleById(id: number): Observable<any> {
    const token = this.authService.getToken();
    const headers = { Token: `${token}` };
    const url = `${this.API_ARTICLES}${id}/`;
    return this.http.get(url, { headers });
  }

  public postArticle(title: string, content: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = { Token: `${token}` };
    const body = { title, content };
    return this.http.post(this.API_ARTICLES, body, { headers });
  }

  public updateArticle(id: number, title: string, content: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = { Token: `${token}` };
    const url = `${this.API_ARTICLES}${id}/`;
    const body = { title, content };
    return this.http.put(url, body, { headers });
  }

  public deleteArticle(id: number): Observable<any> {
    const token = this.authService.getToken();
    const headers = { Token: `${token}` };
    const url = `${this.API_ARTICLES}${id}/`;
    return this.http.delete(url, { headers });
  }

  public getMostRead(): Observable<any> {
    const token = this.authService.getToken();
    const headers = { Token: `${token}` };
    const params = new HttpParams().set('ordering', 'count');
    return this.http.get(this.API_MOST_READ, { headers, params });
  }
}
