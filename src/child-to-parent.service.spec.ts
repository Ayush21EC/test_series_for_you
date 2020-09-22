import { TestBed } from '@angular/core/testing';

import { ChildToParentService } from './child-to-parent.service';

describe('ChildToParentService', () => {
  let service: ChildToParentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildToParentService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
