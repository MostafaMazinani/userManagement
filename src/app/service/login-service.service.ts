import { Injectable } from '@angular/core';
import {UserServiceService} from './user-service.service';

@Injectable()
export class LoginServiceService {

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

}
