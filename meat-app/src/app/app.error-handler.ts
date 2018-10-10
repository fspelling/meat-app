import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from '@angular/common/http';

export class ErrorHandler {
    static handleError(error: HttpErrorResponse | any) {
        let mensagem: string;

        if (error instanceof HttpErrorResponse) {
            mensagem = `Erro ${error.status} ao obter a URL ${error.url} - ${error.statusText}`;
        } else {
            mensagem = error.toString();
        }

        console.log(mensagem);
        return Observable.throw(mensagem);
    }
}
 