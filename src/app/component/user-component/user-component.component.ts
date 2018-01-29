import { Component, OnInit } from '@angular/core';
import {Iuser} from '../../model/iuser';
import {UserServiceService} from '../../service/user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  iusers: Iuser[] = [];
  iuser: Iuser =   {
    id:  0,
    name:  '',
    family: '',
    role: '',
    row: '',
    age:  0,
    code: 0,
    hiredate: '',
    owner: '',
  };

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.iusers = this.userService.getAllUsers();
  }

  onRowClick(name: string, code: number) {
    this.iuser = this.userService.findUserNameandCode(name, code);
    this.router.navigate(['useredit'], {queryParams: {username: name, code : code}});
  }

}
