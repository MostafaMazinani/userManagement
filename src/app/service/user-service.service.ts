import { Injectable } from '@angular/core';
import {UserDbServiceService} from './user-db-service.service';
import {Iuser} from '../model/iuser';

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

  /**
   * find users by his owner(ownercode)
   * @param code
   */
  findUserChild(code: number) {
    return this.userDbService.findByOwnerCode(code);
  }

  /**
   * find a user by ID
   * @param {number} id
   */
  findUserById(id: number) {
    return this.userDbService.findById(id);
  }

  /**
   * update a user
   * @param {Iuser} myUser
   */
  update(myUser: Iuser) {
    this.userDbService.update(myUser);
  }

  /**
   * find a user with his name and family
   */
  findByNameandFamily(name: string, family: string) {
    return this.userDbService.findByNameandFamily(name, family);
  }

}
