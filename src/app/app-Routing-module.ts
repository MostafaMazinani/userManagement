import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './component/login/login.component';
import {UserComponentComponent} from './component/user-component/user-component.component';
import {NotFound404ErrorComponent} from './component/not-found404-error/not-found404-error.component';
import {AuthGuard} from './auth-guard.service';
import {HomeComponent} from './component/home/home.component';
import {UserEditComponent} from './component/user-edit/user-edit.component';
import {EditCheckCandeactivate} from './service/edit-check-candeactivate.service';

const router: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'user', canActivate: [AuthGuard], component: UserComponentComponent},
  { path: 'useredit', canActivate: [AuthGuard], canDeactivate: [EditCheckCandeactivate] , component: UserEditComponent},
  { path: 'not-found', component: NotFound404ErrorComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [ RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
