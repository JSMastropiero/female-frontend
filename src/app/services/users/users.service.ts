import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private API_USUERS = "http://ec2-44-211-222-104.compute-1.amazonaws.com/api/user";

  constructor(private http:HttpClient) { }

  public getAllUsers(): Observable<any>{
    return this.http.get(this.API_USUERS);
  }
}
