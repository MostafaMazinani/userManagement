import {Injectable} from '@angular/core';
import {Iuser} from '../model/iuser';

@Injectable()
export class UserDbServiceService {

  constructor() {
  }

  /**
   * simulate User Db
   */
  userDb: Iuser[] = [
    {
      id: 0,
      name: '',
      family: '',
      role: '',
      row: '',
      age: 0,
      code: 0,
      hiredate: '',
      owner: '',
    }
  ];

  /**
   * add a user to Db
   * @param {Iuser} user
   */

  add(user: Iuser) {
    this.userDb.push(user);
  }

  /**
   * remove a user from DB by His id
   * @param {number} id
   */
  remove(id: number) {
    const u = this.findById(id);
    this.userDb.splice(this.userDb.indexOf(u), 1);
  }

  /**
   * find a user by id
   * @param {number} id
   * @returns {Iuser | undefined}
   */
  findById(id: number) {
    return this.userDb.find(
      (u) => {
        return u.id === id;
      }
    );
  }

  /**
   * update User
   * @param {Iuser} user
   */
  update(user: Iuser) {
    const u = this.findById(user.id);
    const index = this.userDb.indexOf(u);
    this.userDb[index].name = user.name;
    this.userDb[index].family = user.family;
    this.userDb[index].role = user.role;
    this.userDb[index].row = user.row;
    this.userDb[index].age = user.age;
    this.userDb[index].code = user.code;
    this.userDb[index].hiredate = user.hiredate;
    this.userDb[index].owner = user.owner;
  }

  /**
   * find a user by name and his code that is password too.
   */
  findByNameandCode(name: string, code: number) {
    return this.userDb.find(
      (u) => {
        return u.name === name && u.code === code;
      }
    );
  }

  private initialUserDb() {
    this.userDb = [
      { id: 0, name: '', family: '', role: '', row: '', age: 0, code: 0, hiredate: '', owner: '' },
      { id: 0, name: '', family: '', role: '', row: '', age: 0, code: 0, hiredate: '', owner: '' },
      { id: 0, name: '', family: '', role: '', row: '', age: 0, code: 0, hiredate: '', owner: '' },
      { id: 0, name: '', family: '', role: '', row: '', age: 0, code: 0, hiredate: '', owner: '' },
      { id: 0, name: '', family: '', role: '', row: '', age: 0, code: 0, hiredate: '', owner: '' },
      { id: 0, name: '', family: '', role: '', row: '', age: 0, code: 0, hiredate: '', owner: '' },
      { id: 0, name: '', family: '', role: '', row: '', age: 0, code: 0, hiredate: '', owner: '' },
      { id: 0, name: '', family: '', role: '', row: '', age: 0, code: 0, hiredate: '', owner: '' },
      { id: 0, name: '', family: '', role: '', row: '', age: 0, code: 0, hiredate: '', owner: '' },
      { id: 0, name: '', family: '', role: '', row: '', age: 0, code: 0, hiredate: '', owner: '' },
      { id: 0, name: '', family: '', role: '', row: '', age: 0, code: 0, hiredate: '', owner: '' },
      { id: 0, name: '', family: '', role: '', row: '', age: 0, code: 0, hiredate: '', owner: '' },
      { id: 0, name: '', family: '', role: '', row: '', age: 0, code: 0, hiredate: '', owner: '' },
      { id: 0, name: '', family: '', role: '', row: '', age: 0, code: 0, hiredate: '', owner: '' },
      { id: 0, name: '', family: '', role: '', row: '', age: 0, code: 0, hiredate: '', owner: '' },
    ];
  }

}
