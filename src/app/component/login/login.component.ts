import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../service/login-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = '';
  userLogin = new Subject();
  userNameSubscribe = new Subject();
  @ViewChild('loginform') form: NgForm;
  times = ['minutes', 'hours', 'day', 'weeks', 'months', 'year'];


  constructor(private loginService: LoginService,
              private activeRouter: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const iterator = Observable.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    iterator.subscribe(
      (data) => {
        setTimeout(() => {
          console.log(data);
        }, 100);
      }
    );

  }

  onSubmitLoginForm() {
    console.log(this.form.value['username'], this.form.value['password']);
    if (this.loginService.findUserByNameandCode(this.form.value['username'], this.form.value['password']) != null) {
      this.userLogin.next();
      this.router.navigate(['user']);
    } else {
      this.errorMessage = 'username and password id wrong!';
    }
  }

}
