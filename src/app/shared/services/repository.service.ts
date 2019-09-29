import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Repository} from './Repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Token ${localStorage.getItem('ACCESS_TOKEN')}`

    })
  };

  constructor(private http : HttpClient) { }

  getRepositories():Observable<any>{
    return this.http.get(environment.backendUrl+"/all-repository",this.httpOptions)
  }

  getRepositoryDetail(slug:string):Observable<any>{
    return this.http.get(environment.backendUrl+"/repository/"+slug+'/',this.httpOptions)
  }
  ImportRepository(repo:Repository):Observable<Repository>{
    return this.http.post<Repository>(environment.backendUrl+"/repositories/",repo,this.httpOptions)
  }

}
