import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { UserComponentComponent } from './component/user-component/user-component.component';
import {LoginService} from './service/login-service.service';
import {UserServiceService} from './service/user-service.service';
import {UserDbServiceService} from './service/user-db-service.service';
import { NotFound404ErrorComponent } from './component/not-found404-error/not-found404-error.component';
import {AppRoutingModule} from './app-Routing-module';
import { HomeComponent } from './component/home/home.component';
import {AuthGuard} from './auth-guard.service';
import { UserEditComponent } from './component/user-edit/user-edit.component';
import {EditCandeactivate, EditCheckCandeactivate} from './service/edit-check-candeactivate.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponentComponent,
    NotFound404ErrorComponent,
    HomeComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LoginService,
    UserServiceService,
    UserDbServiceService,
    AuthGuard,
    EditCheckCandeactivate
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
