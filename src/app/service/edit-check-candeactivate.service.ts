import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';

export interface EditCandeactivate {
  canDeactivate: () => boolean | Promise<boolean> | Observable<boolean> ;
}
@Injectable()
export class EditCheckCandeactivate implements  CanDeactivate<EditCandeactivate> {
  canDeactivate(
    component: EditCandeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot):
      Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }

  constructor() { }

}
