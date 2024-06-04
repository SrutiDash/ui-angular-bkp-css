import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:1111/login';

  constructor(private http: HttpClient) {}

  login(user_name: string, password: string): Observable<string> {
    return this.http.post<{ message: string }>(this.apiUrl, { user_name, password })
      .pipe(map(response => response.message));
  }
}
