import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {AuthComponent} from "./components/auth/auth.component";
import {UserPageComponent} from "./components/user-page/user-page.component";
import {AuthorizationGuard} from "./auth.guard";

const routes: Routes = [
  { path: '', component:HomePageComponent },
  { path: 'login',
    component: AuthComponent,
  },
  { path: 'my-account',
    component: UserPageComponent,
    canActivate: [AuthorizationGuard] //вроде защищаем страничку пользователя (а должны защищать приложение)
  },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];


@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
