import { TestBed } from '@angular/core/testing';

import { DemandesDeSanctionService } from './demandes-de-sanction.service';

describe('DemandesDeSanctionService', () => {
  let service: DemandesDeSanctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandesDeSanctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
