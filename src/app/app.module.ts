import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { UserComponentComponent } from './component/user-component/user-component.component';
<<<<<<< HEAD
import {LoginServiceService} from './service/login-service.service';
import {RouterModule, Routes} from '@angular/router';
import {UserServiceService} from './service/user-service.service';
import {UserDbServiceService} from './service/user-db-service.service';
=======
>>>>>>> df2494a... add project's structure--file and directory

const router: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(router)
  ],
  providers: [
    LoginServiceService,
    UserServiceService,
    UserDbServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
