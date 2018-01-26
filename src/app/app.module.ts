import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { UserComponentComponent } from './component/user-component/user-component.component';
import {LoginServiceService} from './service/login-service.service';
import {UserServiceService} from './service/user-service.service';
import {UserDbServiceService} from './service/user-db-service.service';
import { NotFound404ErrorComponent } from './component/not-found404-error/not-found404-error.component';
import {AppRoutingModule} from './app-Routing-module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponentComponent,
    NotFound404ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LoginServiceService,
    UserServiceService,
    UserDbServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
