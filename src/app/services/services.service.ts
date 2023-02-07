import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient, 

  ) { 
    
  }

  getFemaleData(): Observable<any>{
    const url = 'http://ec2-44-211-222-104.compute-1.amazonaws.com/api/article/?ordering=-created&search=';
    return this.http.get<any>(url);
  }
}
