import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {Authllizer} from '@authllizer/core';

@Injectable()
// export class AuthGuard implements CanActivate {
//     constructor(private router: Router) {}
//
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         if (localStorage.getItem('isLoggedin')) {
//             return true;
//         }
//
//         this.router.navigate(['/login']);
//         return false;
//     }
// }
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('isLoggedin')) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

}
