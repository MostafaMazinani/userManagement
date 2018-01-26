import { Injectable } from '@angular/core';
import {UserDbServiceService} from './user-db-service.service';

@Injectable()
export class UserServiceService {

  constructor(private userDbService: UserDbServiceService) { }

  /**
   * find User by Name and code
   * @param {string} name
   * @param {number} code
   * @returns {Iuser | undefined}
   */
  findUserNameandCode(name: string, code: number) {
    return this.userDbService.findByNameandCode(name, code);
  }

  /**
   * find a User by Code
   * @param {number} code
   * @returns {any}
   */
  findUserByCode(code: number) {
    return this.userDbService.findByCode(code);
  }

  /**
   * get all User from Db
   * @returns {any}
   */
  getAllUsers() {
    return this.userDbService.getAllUser();
  }
}
