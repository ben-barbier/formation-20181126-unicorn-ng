import { TestBed, async, inject } from '@angular/core/testing';

import { PairBirthyearGuard } from './pair-birthyear.guard';

describe('PairBirthyearGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PairBirthyearGuard]
    });
  });

  it('should ...', inject([PairBirthyearGuard], (guard: PairBirthyearGuard) => {
    expect(guard).toBeTruthy();
  }));
});
