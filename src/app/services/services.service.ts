import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
  ) { 
    
  }
  /*
  getFemaleData(): Observable<any>{
    const url = 'http://ec2-44-211-222-104.compute-1.amazonaws.com/api/article/?ordering=-created&search=';
    return this.http.get<string>(url);
  }*/
}
