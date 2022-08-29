import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot, UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from "./services/auth-service/auth.service";
import {AuthenticatedResult} from "angular-auth-oidc-client/lib/auth-state/auth-result";
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";
import {OidcSecurityService} from "angular-auth-oidc-client";
import { authCodeFlowConfig } from "./auth.config";
import {InitialAuthService} from "./services/auth-service/InitialAuthService";


@Injectable({ providedIn: 'root' })
export class AuthorizationGuard implements CanActivate {

  constructor(
    //private authService: AuthService,
    private router: Router,
    //public oidcSecurityService: OidcSecurityService,
    private oauthService: OAuthService,
    private initAuth: InitialAuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {


    if(!this.initAuth.isAuthorized) {
      //this.initAuth.initAuth().then();

      this.oauthService.loadDiscoveryDocumentAndTryLogin();
      this.initAuth.isAuthorized = true;

    }
    return this.initAuth.isAuthorized;
    // Если не авторизованы
    // return this.oidcSecurityService.isAuthenticated$.pipe(
    //   map(({ isAuthenticated }) => {
    //     // allow navigation if authenticated
    //     if (isAuthenticated) {
    //       return true;
    //     }else {
    //       // Отправить на авторизацию
    //       this.oidcSecurityService.authorize();
    //     }
    //
    //
    //     // redirect if not authenticated
    //     this.router.navigate(['']);
    //
    //     return false;
    //   })
    // );
  }
}
