import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Token ${localStorage.getItem('ACCESS_TOKEN')}`

    })
  };
  constructor(private http : HttpClient) { }
  // Observable for getting the user and their commits in a repository
  getUserCommits(slug:string):Observable<any>{
    return this.http.get(environment.backendUrl+"/user-commits/"+slug+'/',this.httpOptions)
  }
  // Observable for getting the user commits in a repository for a specific date
  getUserDateCommits(slug:string):Observable<any>{
    return this.http.get(environment.backendUrl+"/user-date-commits/"+slug+'/',this.httpOptions)
  }
  // Observable for getting the commits in a repository in a date
  getDateCommits(slug:string):Observable<any>{
    return this.http.get(environment.backendUrl+"/date-commits/"+slug+'/',this.httpOptions)
  }
}
