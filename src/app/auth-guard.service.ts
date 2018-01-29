import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {LoginService} from './service/login-service.service';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.loginService
      .findUserByNameAndCode2('Noah', '383200')
      .then(
        (result: boolean) => {
        if (result) {
          return true;
        } else {
          this.router.navigate(['home']);
          return false;
        }
      });
  }

}
