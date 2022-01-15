import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Advice, User } from '../models/home.interface';

//@Injectable()

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  abc: number;
  subjectExample = new Subject<boolean>();
  subjectExample$ = this.subjectExample.asObservable();

  behaviorSubjectExample = new BehaviorSubject<boolean>(false);
  behaviorSubjectExample$ = this.behaviorSubjectExample.asObservable();

  constructor(private http: HttpClient) {}

  getUserDetails(userId: string): Observable<User> {
    return this.http.get<User>(`${environment.apiPath}users/${userId}`);
  }

  getPosts(): Observable<any> {
    return this.http.get<any>(`${environment.apiPath}posts`);
  }

  getAdvices(): Observable<Advice> {
    return this.http.get<any>(`${environment.apiPath2}advice`);
  }

  getAdviceById(id: number): Observable<Advice> {
    return this.http.get<any>(`${environment.apiPath2}advice/${id}`);
  }
}
