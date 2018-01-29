import { Injectable } from '@angular/core';
import {UserServiceService} from './user-service.service';

@Injectable()
export class LoginService {

  constructor(private userService: UserServiceService) { }

  /**
   * find a user by Name and code
   * @param {string} username
   * @param {string} password
   * return User or null
   */
  findUserByNameandCode(username: string, code: string) {
    return this.userService.findUserNameandCode(username, +code);
  }

  /**
   * get all user
   * @returns {Iuser[]}
   */
  getAllUser() {
    return this.userService.getAllUsers();
  }

  findUserByNameAndCode2(username: string, code: string) {
    return new Promise<Boolean>(
      (resolve, reject) => {
          this.findUserByNameandCode(username, code) != null ? resolve(true) : reject(false);
      }
    );
  }

}
