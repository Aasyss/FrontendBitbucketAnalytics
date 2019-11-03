import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Token ${localStorage.getItem('ACCESS_TOKEN')}`

    })
  };

  change_log_url:string;
  constructor(private http : HttpClient) { }

  getAllFiles(slug:string):Observable<any>{
    return this.http.get(environment.backendUrl+"/files/"+slug+'/',this.httpOptions)
  }
  getFileHistory(change_log_url:string):Observable<any>{
    return this.http.get(change_log_url+'?fields=values.next,values.path,values.commit.date,values.commit.message,values.commit.author.user.uuid,values.commit.author.user.nickname')
  }
}
