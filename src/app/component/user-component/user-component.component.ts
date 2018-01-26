import { Component, OnInit } from '@angular/core';
import {Iuser} from '../../model/iuser';
import {UserServiceService} from '../../service/user-service.service';

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

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.iusers = this.userService.getAllUsers();
  }

  onRowClick(name: string, code: number) {
    this.iuser = this.userService.findUserNameandCode(name, code);
    alert(this.iuser.name);
  }

}
