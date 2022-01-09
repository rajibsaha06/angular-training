import { HttpInterceptor } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MyHttpInterceptor } from './my-http.interceptor';

describe('HttpInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [MyHttpInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: HttpInterceptor = TestBed.inject(MyHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
