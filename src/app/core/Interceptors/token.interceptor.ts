import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from "@angular/router";
import { Observable, throwError, BehaviorSubject } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  isRefreshing: boolean = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(public authService: UserService,
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    let headers = new HttpHeaders();
    headers = request.headers;
    headers.set('Content-Type','application/json');
    headers.set('Accept-Language','ar')
    request = request.clone({ headers });

    let token = this.authService.getToken()
    console.log(token)
    if (token) {
      request = this.addToken(request, token);
    }

    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return this.handle401Error(request, next);
      } else {
        return throwError(error);
      }
    }));
  }

  private addToken(request: HttpRequest<any>, token: string) {
    let headers = new HttpHeaders();
    headers = request.headers;
    headers = headers.set('Authorization', `Bearer ${token}`);
    return request.clone({ headers });
  }
  private addHeaders(request: HttpRequest<any>) {
    let headers = new HttpHeaders();
    return request.clone({ headers });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    console.log("Unauthorized");
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.access_token);
          return next.handle(this.addToken(request, token.access_token));
        }),
        catchError(error => {
          this.authService.logout()
          return throwError(error);
        }));

    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        }));
    }
  }
}
