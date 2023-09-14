import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(
    private loaderService : LoaderService,

  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show()

    // return next.handle(request);
    return next.handle(request).pipe(tap(evt => {
      if(evt instanceof HttpResponse ) {
          this.loaderService.hide()
      }

    }))
  }
}
