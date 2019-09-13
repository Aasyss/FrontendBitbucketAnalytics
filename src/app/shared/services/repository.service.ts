import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  // Repository: Repository[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Token ${localStorage.getItem('ACCESS_TOKEN')}`

    })
  };

  constructor(private http : HttpClient) { }

  getRepositories():Observable<any>{
    return this.http.get(environment.backendUrl+"/all-repository",this.httpOptions)
    // return this.http.post<any>(environment.api_url+"rest-auth/login/",user,this.httpOptions)
    //   .pipe(map(res =>{
    //   JSON.stringify(res)
    // }))

    // console.log(response);
    // JSON.stringify(response);
    // console.log(JSON.parse(response));

    // return this.http.get('https://bitbucket.org/api/2.0/repositories/aashish_iw',{responseType:'json'}).map((response: Repository[])=>{
    //   console.log(response);
    //   this.Repository = response;
    //   JSON.stringify(response);
    //   // console.log(JSON.stringify(response));
    // })
  }

}
