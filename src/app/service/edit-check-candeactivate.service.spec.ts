import { TestBed, inject } from '@angular/core/testing';

import { EditCheckCandeactivateService } from './edit-check-candeactivate.service';

describe('EditCheckCandeactivateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditCheckCandeactivateService]
    });
  });

  it('should be created', inject([EditCheckCandeactivateService], (service: EditCheckCandeactivateService) => {
    expect(service).toBeTruthy();
  }));
});
