import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {UserServiceService} from './user-service.service';
=======
>>>>>>> df2494a... add project's structure--file and directory

@Injectable()
export class LoginServiceService {

<<<<<<< HEAD
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
=======
  constructor() { }

>>>>>>> df2494a... add project's structure--file and directory
}
