import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { OidcSecurityService } from "angular-auth-oidc-client";
import {AuthService} from "../../services/auth-service/auth.service";
import {authCodeFlowConfig} from "../../auth.config";
import {JwksValidationHandler} from "angular-oauth2-oidc-jwks";
import {BehaviorSubject} from "rxjs";
import { AuthConfigModule } from "../../auth/auth-config.module";
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})

// Просто тестовый компонент, который в итоге будет заменен на приложение абис
export class UserPageComponent implements OnInit {

  constructor(
    private router: Router,
    private Oauth: OAuthService,
    //private oidcSecurityService: OidcSecurityService,
    //private authService: AuthService
  ) { }

  userName$: BehaviorSubject<string> | undefined;
  ngOnInit(): void {

    this.Oauth.configure(authCodeFlowConfig);
  }


  // Выйти на домашнюю страницу сайта
  logout(){
    this.Oauth.revokeTokenAndLogout(
      {
        client_id: this.Oauth.clientId,
        returnTo: this.Oauth.redirectUri
      }, true
    );
    // this.oidcSecurityService.logoff();
    // this.router.navigate(['login']);
    //this.authService.Logout();
  }


}
