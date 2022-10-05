/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicioService } from './Servicio.service';

describe('Service: Servicio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioService]
    });
  });

  it('should ...', inject([ServicioService], (service: ServicioService) => {
    expect(service).toBeTruthy();
  }));
});
