import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { FormsModule } from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth.interceptor";
import { AuthConfigModule } from './auth/auth-config.module';
import {OAuthModule, OAuthStorage, ValidationHandler} from "angular-oauth2-oidc";
import {AuthModule} from "./auth/auth.module";
import {AuthConfig, OAuthModuleConfig} from "angular-oauth2-oidc";
import {JwksValidationHandler} from "angular-oauth2-oidc-jwks"; // подключаем конфигурацию Oauth 2

const config: AuthConfig = {
  issuer: 'SAT',
  clientId: 'DEMO',
  redirectUri: 'http://localhost:4200/my-account',
  logoutUrl: 'http://localhost:4200' + encodeURIComponent(window.location.origin),
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  scope: 'openid profile email',
};

const authModuleConfig: OAuthModuleConfig = {
  // Inject "Authorization: Bearer ..." header for these APIs:
  resourceServer: {
    allowedUrls: ['http://localhost:8080'],
    sendAccessToken: true,
  },
};

//config.logoutUrl = `${config.issuer}v2/logout?client_id=${config.clientId}&returnTo=${encodeURIComponent(config.redirectUri)}`;

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomePageComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // OAuthModule.forRoot(authModuleConfig)
    // AuthConfigModule
    AuthModule
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
