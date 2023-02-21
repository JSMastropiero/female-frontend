import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  private API_FILES = 'http://ec2-44-204-184-149.compute-1.amazonaws.com/api/file/';
  private API_SEARCH_FILES = 'http://ec2-44-204-184-149.compute-1.amazonaws.com/api/file/';

  constructor(private http: HttpClient, private authService: AuthService) { }

  public getAllFiles(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    return this.http.get(this.API_FILES, { headers });
  }

  public searchFiles(query: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    const params = new HttpParams().set('search', query).set('ordering', '-created');
    return this.http.get(this.API_SEARCH_FILES, { headers, params });
  }

  public lastFiles(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    const params = new HttpParams().set('ordering', '-created');
    return this.http.get(this.API_FILES, { headers, params });
  }

  public lastVideos(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    const params = new HttpParams().set('search', 'video').set('ordering', '-created');
    return this.http.get(this.API_SEARCH_FILES, { headers, params });
  }

  public lastAudio(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    const params = new HttpParams().set('search', 'audio').set('ordering', '-created');
    return this.http.get(this.API_SEARCH_FILES, { headers, params });
  }

  public lastBooks(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    const params = new HttpParams().set('search', 'book').set('ordering', '-created');
    return this.http.get(this.API_SEARCH_FILES, { headers, params });
  }

  public lastDocuments(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    const params = new HttpParams().set('search', 'document').set('ordering', '-created');
    return this.http.get(this.API_SEARCH_FILES, { headers, params });
  }

  public getFileById(id: number): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    const url = `${this.API_FILES}${id}/`;
    return this.http.get(url, { headers });
  }

  public postFile(title: string, file: File): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);
    return this.http.post(this.API_FILES, formData, { headers });
  }

  public updateFile(id: number, title: string, file: File): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    const url = `${this.API_FILES}${id}/`;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);
    return this.http.put(url, formData, { headers });
  }
}

