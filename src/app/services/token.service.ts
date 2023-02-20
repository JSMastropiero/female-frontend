import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenSubject = new BehaviorSubject<string>('df694bf64f535afcf127512f92174545ea4325be');

  constructor() { }

  public getToken(): Observable<string> {
    return this.tokenSubject.asObservable();
  }
}
