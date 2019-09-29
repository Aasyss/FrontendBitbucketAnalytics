import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {Authllizer} from '@authllizer/core';
import {LoginService} from '../services';

@Injectable()

// export class AuthGuard implements CanActivate {
//
//   constructor(private loginService: LoginService){}
//
//   canActivate(next: ActivatedRouteSnapshot,
//               state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     return this.loginService.isLoggedIn();
//   }
//
// }

export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('ACCESS_TOKEN')) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

}
