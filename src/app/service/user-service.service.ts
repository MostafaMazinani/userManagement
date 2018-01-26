import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {UserDbServiceService} from './user-db-service.service';
=======
>>>>>>> df2494a... add project's structure--file and directory

@Injectable()
export class UserServiceService {

<<<<<<< HEAD
  constructor(private userDbService: UserDbServiceService) { }

  findUserNameandCode(name: string, code: number) {
    return this.userDbService.findByNameandCode(name, code);
  }
=======
  constructor() { }

>>>>>>> df2494a... add project's structure--file and directory
}
