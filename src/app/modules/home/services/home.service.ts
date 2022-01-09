import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/home.interface';

//@Injectable()

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  abc: number;

  constructor(private http: HttpClient) {}

  getUserDetails(userId: string): Observable<User> {
    return this.http.get<User>(`${environment.apiPath}users/${userId}`);
  }

  getPosts(): Observable<any> {
    return this.http.get<any>(`${environment.apiPath}posts`);
  }
}
