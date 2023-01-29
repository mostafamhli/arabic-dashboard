import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckNoSessionGuard implements CanActivate {
  constructor(private userService: UserService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userService.isLoggedIn()) {
      this.router.navigateByUrl("/")
      return false;
    } else {
      return true;
    }
  }
}
