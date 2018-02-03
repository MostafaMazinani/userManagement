import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UserServiceService} from '../../service/user-service.service';
import {Iuser} from '../../model/iuser';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  formGroup: FormGroup;
  private owner: Iuser;
  private roleManager = ['Manager', 'User'];
  private roleUser = ['User'];
  roles;

  constructor(private router: ActivatedRoute,
              private userService: UserServiceService) {
  }

  ngOnInit() {
    this.owner = this.userService.findUserByCode(+this.router.snapshot.queryParams.code);
    this.formGroup = new FormGroup({
      'userInfo': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'family': new FormControl(null, Validators.required)
      }),
      'jobInfo': new FormGroup({
        'role': new FormControl(null, Validators.required),
        'row': new FormControl(+this.owner.row + 1, Validators.required),
        'code': new FormControl(null,
          [Validators.required, this.ValidatorExistsCodeCheck.bind(this)]),
        'hireDate': new FormControl(null, Validators.required),
        'owner': new FormControl(
          this.owner.code
            .toString()
            .concat(', ')
            .concat(
              this.owner.name
            ),
          Validators.required
        )
      }),
    'files': new FormArray([])
  });
    if (this.owner.role.toLowerCase() === 'admin') {
      this.roles = this.roleManager;
    } else {
      this.roles = this.roleUser;
    }
  }

  /**
   * add File Uploader tag to Html
   */
  onClickAddFiles() {
    const uploader = new FormControl(null);
    (<FormArray>this.formGroup.get('files')).push(uploader);
  }

  /**
   * submit form but now just log the form value
   */
  submitForm() {
    console.log(this.formGroup);
  }

  /**
   * validation: you can't input firstname + lastname that be in Db
   */
  ValidatorExistsCodeCheck(control: FormControl): { [message: string]: boolean } {
    console.log('value: ' + control.value);
    console.log('code : ' + this.userService.findUserByCode(+control.value));
     if (this.userService.findUserByCode(+control.value)) {
       return {'This code is exists': false};
     }
     return null;
  }
}
