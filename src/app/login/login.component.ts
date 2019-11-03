import { Component, OnInit } from '@angular/core';
import {Authllizer, OAuth2Provider} from '@authllizer/core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {HttpBackend, HttpClient, HttpErrorResponse} from '@angular/common/http';

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
  authenticate(provider: string) {
    // const http = new HttpClient(this.handler);
    this.auth.authenticate(provider)
      .then((result) => {
        localStorage.setItem('USER_NAME',result['user']['username']);
        localStorage.setItem('ACCESS_TOKEN',result['key']);
        console.log('success');
        this.toastr.success('You have successfully signed in with ' + provider + '!');
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigateByUrl('/dashboard');
      })
      .catch((response: Error | HttpErrorResponse) => {
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
