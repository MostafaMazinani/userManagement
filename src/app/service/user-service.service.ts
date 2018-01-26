import { Injectable } from '@angular/core';
import {UserDbServiceService} from './user-db-service.service';

@Injectable()
export class UserServiceService {

  constructor(private userDbService: UserDbServiceService) { }

  findUserNameandCode(name: string, code: number) {
    return this.userDbService.findByNameandCode(name, code);
  }
}
