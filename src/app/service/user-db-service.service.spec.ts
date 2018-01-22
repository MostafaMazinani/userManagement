import { TestBed, inject } from '@angular/core/testing';

import { UserDbServiceService } from './user-db-service.service';

describe('UserDbServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDbServiceService]
    });
  });

  it('should be created', inject([UserDbServiceService], (service: UserDbServiceService) => {
    expect(service).toBeTruthy();
  }));
});
