import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

export class ErrorHandler {
    static handleError(error: Response | any) {
        let mensagem: string;

        if (error instanceof Response) {
            mensagem = `Erro ${error.status} ao obter a URL ${error.url} - ${error.statusText}`;
        } else {
            mensagem = error.toString();
        }

        console.log(mensagem);
        return Observable.throw(mensagem);
    }
}
 