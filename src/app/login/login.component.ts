import { Component, OnInit } from '@angular/core';
import {Authllizer} from '@authllizer/core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {getToken} from 'codelyzer/angular/styles/cssLexer';

export interface ISignInUser {
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: ISignInUser = {};

  constructor(private auth: Authllizer, private toastr: ToastrService, private router: Router, public http: HttpClient) { }


  ngOnInit() {
  }
  signIn() {
    console.log('signin');
    this.auth.signIn(this.user)
      .then(() => {
        this.toastr.success('You have successfully signed in!');
        this.router.navigateByUrl('/');
        console.log('success');
      })
      .catch(({error,message,status}:HttpErrorResponse) => {
        this.toastr.error(typeof error === 'object' && error.message ? error.message : message, status as any);
        console.log('error');
      });
  }
  authenticate(provider: string) {

    // this.retrivetoken(this.auth.getToken());


    this.auth.authenticate(provider)
      .then(() => {

        console.log('success');
        this.toastr.success('You have successfully signed in with ' + provider + '!');
        this.router.navigateByUrl('home/');
      })
      .catch((response: Error | HttpErrorResponse) => {
        console.log('error');
        if ((response as HttpErrorResponse).error) {
          let {error} = (response as HttpErrorResponse);
          this.toastr.error(typeof error === 'object' && error.message  ? error.message : error);
        } else if (!(response as HttpErrorResponse).message) {
          this.toastr.error(response.message);
        } else {
          this.toastr.error(response as any);
        }
      });
  };

}
