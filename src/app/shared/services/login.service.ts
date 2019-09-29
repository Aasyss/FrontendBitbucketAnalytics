import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient ,private handler: HttpBackend, private router: Router) { }

  isLoggedIn() {
    // @ts-ignore
    // this.router.navigateByUrl(['/login']);
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }
}
