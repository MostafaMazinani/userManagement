import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {LoginServiceService} from '../../service/login-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceService} from '../../service/user-service.service';
import {UserDbServiceService} from '../../service/user-db-service.service';
=======
>>>>>>> df2494a... add project's structure--file and directory

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private loginService: LoginServiceService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}
=======
  constructor() { }
>>>>>>> df2494a... add project's structure--file and directory

  ngOnInit() {
  }

<<<<<<< HEAD
  // authorize() {
  //   if (this.loginService.findUserByNameandCode(this.username, this.password) != null) {
  //      this.router.navigate(['user']);
  //   } else {
  //      this.errorMessage = 'username and password id wrong!';
  //   }
  // }

=======
>>>>>>> df2494a... add project's structure--file and directory
}
