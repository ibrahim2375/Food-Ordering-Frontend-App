import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
//number of requests to server to show loading components
var pendingRequest = 0;
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
 
  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // when send  request to server we gone show the loading from loading services and increase pendingRequest var by 1 just to know its shown
    this.loadingService.showLoading();
    pendingRequest = pendingRequest + 1;
    //get response from server we well hise the loading from loading services
    return next.handle(request).pipe(
      tap({
        next:(event) => {
          if(event.type === HttpEventType.Response){
            this.handleHideLoading();
          }
        },error:() => {
          this.handleHideLoading();
        } 
      })
    )
  }
  handleHideLoading(){
    //decrease var by 1 back to 0 to check if its  === 0 we gone hide the loading from loading services
    pendingRequest = pendingRequest - 1;
    if(pendingRequest === 0){
      this.loadingService.hideLoading();
    }
  }
}
