import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {UserServiceService} from '../../service/user-service.service';
import {Iuser} from '../../model/iuser';
import {Observable} from 'rxjs/Observable';
import {EditCandeactivate, EditCheckCandeactivate} from '../../service/edit-check-candeactivate.service';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, EditCandeactivate, OnDestroy {

  username = '';
  code = 0;
  userId;
  userName;
  userFamily;
  userCode;
  userOwner;
  userAge;
  userHiredate;
  userRow;
  userRole;

  topUser: Iuser = {
    id: 0, name: '', family: '', role: '',
    row: '', age: 0, code: 0, hiredate: '', owner: ''
  };

  myUser: Iuser = {
    id: 0, name: '', family: '', role: '',
    row: '', age: 0, code: 0, hiredate: '', owner: ''
  };

  userChild: Iuser[] = [{
    id: 0, name: '', family: '', role: '',
    row: '', age: 0, code: 0, hiredate: '', owner: ''
  }];

  editId = -1;

  subscrition: Subscription;

  constructor(private userService: UserServiceService,
              private router: Router,
              private activeRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this.username = this.activeRouter.snapshot.queryParams['username'];
    this.code = this.activeRouter.snapshot.queryParams['code'];
    this.topUser = this.userService.findUserNameandCode(this.username, this.code);
    this.userChild = this.userService.findUserChild(this.code);

    const temp = Observable
      .of(this.userChild)
      .do(x => {
          console.log(x.length);
        }
      );


    temp.subscribe((x: Iuser[]) => {
      x.forEach(value => {
          console.log(value.name);
        }
      );
    });

    const customObservable = Observable.create(
      (observer: Observer<number>) => {
        observer.next(1);
        observer.next(2.5);
        observer.next(3.25);
        observer.complete();
      }
    );
    customObservable.subscribe(
      (value: number) => {
        console.log(value);
      }
    );
  }

  getEdit(id: number) {
    if (this.editId === id) {
      return true;
    } else {
      return false;
    }
  }

  edit(id: number) {
    this.editId = id;
    this.myUser = this.userService.findUserById(id);
    this.userId = this.myUser.id;
    this.userName = this.myUser.name;
    this.userFamily = this.myUser.family;
    this.userOwner = this.myUser.owner;
    this.userRole = this.myUser.role;
    this.userRow = this.myUser.row;
    this.userHiredate = this.myUser.hiredate;
    this.userAge = this.myUser.age;
    this.userCode = this.myUser.code;
  }

  update() {
    this.editId = -1;
    this.userService.update(this.myUser);
  }

  canDeactivate(): boolean | Promise<boolean> | Observable<boolean> {
    console.log(this.myUser.name, this.userName, this.myUser.name !== this.userName);
    if (
      (this.editId !== -1) &&
      (this.myUser.name !== this.userName ||
        this.myUser.family !== this.userFamily ||
        this.myUser.role !== this.userRole ||
        this.myUser.age !== this.userAge ||
        this.myUser.hiredate !== this.userHiredate)
    ) {
      return confirm(
        'you on edit User '
          .concat(this.myUser.name)
          .concat(' with Code ')
          .concat(this.myUser.code.toString())
          .concat(', are sure to leave that!')
      );
    } else {
      return true;
    }
  }

  ngOnDestroy(): void {
    this.subscrition.unsubscribe();
  }
}
