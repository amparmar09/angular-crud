import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import Swal from 'sweetalert2';

export const customInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  console.log("REQUEST::", req);

  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        req.headers.set('Content-Type', 'application/json')
      }
    }),
    catchError(error => {
      console.error("API Error:", error);
      Swal.fire({
        toast: true,
        icon: 'error',
        position: 'top-right',
        showConfirmButton: false,
        timerProgressBar: false,
        timer: 3000,
        title: `${error.name}`
      })
      return throwError(new Error('An error occurred while processing your request.'));
    })
  );
};
