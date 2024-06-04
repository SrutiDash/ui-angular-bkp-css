import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UserDetails {
  user_name: string;
  parent_name: string;
  domain_name: string;
  category_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private apiUrl = 'http://localhost:1111/user-details';

  constructor(private http: HttpClient) {}

  getUserDetails(params: { [key: string]: string }): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>(this.apiUrl, { params });
  }
}
