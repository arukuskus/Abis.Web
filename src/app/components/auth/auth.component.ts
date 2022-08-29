import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {AuthenticatedResult, OidcClientNotification, OidcSecurityService} from "angular-auth-oidc-client";
import {BehaviorSubject, Observable} from "rxjs";
import {AuthService} from "../../services/auth-service/auth.service";
import {OAuthService} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from "../../auth.config";
import {JwksValidationHandler} from "angular-oauth2-oidc-jwks";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  userDataChanged$: Observable<OidcClientNotification<any>> | undefined;
  userData$: Observable<any> | undefined; // данные пользователя (логин, пароль)
  isAuthenticated$: Observable<AuthenticatedResult> | undefined; // проверка прошла ли аутентификация

  checkSessionChanged$: Observable<boolean> | undefined; //сменилась ли сессия
  checkSessionChanged: any;

  loginForm: any = {
    login: '',
    password: ''
  }

  userName$: BehaviorSubject<string> | undefined;

  constructor(
    private router: Router,
    private authService: AuthService,
    private  oidcSecurityService: OidcSecurityService,
  ) { }

  ngOnInit(): void {

    // Инициализируем конфигурацию
    this.configureSingleSignOn();

    // Получаем клеймы пользователя
    //const  userClaims: any = this.oathService.getIdentityClaims();

   // this.userName$ = userClaims.name ? userClaims.name : "";
  }

  // Конфигурация
  configureSingleSignOn(){
    // this.oathService.configure( authCodeFlowConfig );
    //
    // // Валидация токена
    // this.oathService.tokenValidationHandler = new JwksValidationHandler();
    // this.oathService.loadDiscoveryDocumentAndTryLogin();
  }

  login(){
    //this.router.navigate(['my-account']);

    // Старт авторизации
    //this.oathService.initLoginFlow();
  }

  // get token() {
  //   // let claims: any = this.oathService.getIdentityClaims(); // Получаем клеймы
  //   // return claims ? claims: null;
  // }
}
