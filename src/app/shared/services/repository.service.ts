import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  // Repository: Repository[];

  constructor(private http : HttpClient) { }

  getRepositories():Observable<any>{
    return this.http.get('https://bitbucket.org/api/2.0/repositories/aashish_iw')
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
