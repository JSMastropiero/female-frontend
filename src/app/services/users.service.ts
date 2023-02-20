import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './token.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private API_USERS = 'http://ec2-44-211-222-104.compute-1.amazonaws.com/api/user';

  constructor(private http: HttpClient, private authService: AuthService) { }

  public getAllUsers(): Observable<any> {
    return this.authService.getToken().pipe(
      switchMap(token => {
        const headers = { Authorization: `Token ${token}` };
        return this.http.get(this.API_USERS, { headers });
      })
    );
  }

  public getUserById(id: number): Observable<any> {
    return this.authService.getToken().pipe(
      switchMap(token => {
        const headers = { Authorization: `Token ${token}` };
        const url = `${this.API_USERS}/${id}`;
        return this.http.get(url, { headers });
      })
    );
  }

  public updateUser(user: any): Observable<any> {
    return this.authService.getToken().pipe(
      switchMap(token => {
        const headers = { Authorization: `Token ${token}` };
        const url = `${this.API_USERS}/${user.id}`;
        return this.http.put(url, user, { headers });
      })
    );
  }

  public deleteUser(id: number): Observable<any> {
    return this.authService.getToken().pipe(
      switchMap(token => {
        const headers = { Authorization: `Token ${token}` };
        const url = `${this.API_USERS}/${id}`;
        return this.http.delete(url, { headers });
      })
    );
  }
}
