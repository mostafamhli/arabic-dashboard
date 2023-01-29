import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, filter, take, switchMap, tap, mapTo } from 'rxjs/operators';
import { TAXI_ACCESS_TOKEN, TAXI_REFRESH_TOKEN } from '../constants/genric.const';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  _LoginUrl: string
  refreshTokenUrl: string
  constructor(
    private httpClient: HttpClient,
    private _router: Router
  ) {
    this._LoginUrl = environment.baseURL + '/api/app/auth/login'
    this.refreshTokenUrl = environment.baseURL + '/api/app/auth/refresh'
  }

  login(loginData: any) {
    const body = {
      userName: loginData.userName,
      password: loginData.password
    }

    var response = this.httpClient
      .post<any>(this._LoginUrl, body)
      .pipe(
        tap((tokens: any) => this.storeTokens(tokens)),
        mapTo(true)
      );
    return response;
  }

  logout() {
    this.removeTokens();
    this._router.navigate(['/login']);
  }

  isLoggedIn() {
    if (!this.getToken()) return false;
    return true;
  }

  refreshToken() {
    let refreshToken: any = this.getRefreshToken();
    let accessToken: any = this.getToken();
    const body = {
      token: accessToken,
      refreshToken: refreshToken
    }

    return this.httpClient
      .post<any>(this.refreshTokenUrl, body)
      .pipe(
        tap((tokens: any) => {
          this.storeTokens(tokens);
        })
      );
  }

  public getToken() {
    return localStorage.getItem(TAXI_ACCESS_TOKEN);
  }

  private getRefreshToken() {
    return localStorage.getItem(TAXI_REFRESH_TOKEN);
  }

  private storeTokens(tokens: any) {
    localStorage.setItem(TAXI_ACCESS_TOKEN, tokens.token);
    localStorage.setItem(TAXI_REFRESH_TOKEN, tokens.refreshToken);
  }

  public removeTokens() {
    localStorage.removeItem(TAXI_ACCESS_TOKEN);
    localStorage.removeItem(TAXI_REFRESH_TOKEN);
  }
}
