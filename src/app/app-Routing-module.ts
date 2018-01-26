import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './component/login/login.component';
import {UserComponentComponent} from './component/user-component/user-component.component';
import {NotFound404ErrorComponent} from './component/not-found404-error/not-found404-error.component';

const router: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponentComponent},
  { path: 'not-found', component: NotFound404ErrorComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [ RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
