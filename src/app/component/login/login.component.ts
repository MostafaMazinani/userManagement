import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../../service/login-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private loginService: LoginServiceService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
  }

  authorize() {
    console.log('userName: '+ this.username);
    console.log('password: '+ this.password);
    if (this.loginService.findUserByNameandCode(this.username, this.password) != null) {
       this.router.navigate(['user']);
    } else {
       this.errorMessage = 'username and password id wrong!';
    }
  }

}
