import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommitsService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Token ${localStorage.getItem('ACCESS_TOKEN')}`

    })
  };

  constructor(private http : HttpClient) { }

  getAllCommits(slug:string):Observable<any>{
    return this.http.get(environment.backendUrl+"/commits/"+slug+'/',this.httpOptions)
  }

}
