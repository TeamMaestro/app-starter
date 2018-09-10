import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
/**
 * Hijacks the outbound request to append the authorization token.
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer TODO_TOKEN`
            }
        });
        return next.handle(request);
    }

}
