import { TestBed } from '@angular/core/testing';
import { WidgetsService } from './widgets.service';
import { ENVIRONMENT } from '@angular-nx/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { mockWidget } from '@angular-nx/testing';

describe('WidgetsService', () => {
  let service: WidgetsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: ENVIRONMENT, useValue: {} }
      ]
    });
    service = TestBed.inject(WidgetsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should call http', () => {
    it('get() on service.all()', done => {
      service.all().subscribe(widgets => {
        expect(widgets).toMatchObject([ mockWidget ]);
        done();
      });

      const request = httpTestingController.expectOne(service[ 'getUrl' ]());
      request.flush([ mockWidget ]);
      httpTestingController.verify();
    });
  });
});
