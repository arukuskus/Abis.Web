import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { InitialAuthService } from "./services/auth-service/InitialAuthService"; // подключаем конфигурацию Oauth 2
import { AuthModule } from './auth/auth.module';

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
    AuthModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
