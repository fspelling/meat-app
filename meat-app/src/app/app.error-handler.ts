import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { NotificationService } from './shared/messages/snackbar/notification.service';
import { LoginService } from './security/login/login.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {
    constructor(private notificacao: NotificationService, private injector: Injector, private zone: NgZone) {
        super();
    }

    handleError(error: HttpErrorResponse | any) {
        if (error instanceof HttpErrorResponse) {
            const message: string = error.error.message;

            this.zone.run(() => {
                switch (error.status) {
                    case 401:
                        this.injector.get(LoginService).handleLogin();
                        break;

                    case 403:
                        this.notificacao.notify(message || 'nao autorizado');
                        break;

                    case 404:
                        this.notificacao.notify(message || 'recurso nao encontrado');
                        break;
                }
            });
        }

        super.handleError(error);
    }
}
