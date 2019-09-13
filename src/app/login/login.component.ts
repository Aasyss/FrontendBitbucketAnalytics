import { Component, OnInit } from '@angular/core';
import {Authllizer, OAuth2Provider} from '@authllizer/core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Users} from '../shared/users';

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

  constructor(private auth: Authllizer, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
  }
  signIn() {
    console.log('signin');
    this.auth.signIn(this.user)
      .then(() => {
        this.toastr.success('You have successfully signed in!');
        this.router.navigateByUrl('/dashboard');
        console.log('success');
      })
      .catch(({error,message,status}:HttpErrorResponse) => {
        this.toastr.error(typeof error === 'object' && error.message ? error.message : message, status as any);
        console.log('error');
      });
  }
  authenticate(provider: string) {

    this.auth.authenticate(provider)
      .then(() => {
        console.log('success');
        this.toastr.success('You have successfully signed in with ' + provider + '!');
        // localStorage.setItem('isLoggedin', 'true');
        this.router.navigateByUrl('/dashboard');
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
