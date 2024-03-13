import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';
      error.error instanceof ErrorEvent
        ? (errorMessage = `${error.error.message}`)
        : (errorMessage = `Error code: ${error.status}, message: ${error.message}`);

      return throwError(() => errorMessage);
    })
  );
};
