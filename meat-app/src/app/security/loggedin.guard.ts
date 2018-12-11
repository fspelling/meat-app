import { CanLoad, Route } from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from "./login/login.service";

@Injectable()
export class LoggedInGuard implements CanLoad {
    constructor(private loginService: LoginService) { }

    canLoad(router: Route): boolean {
        const loggedin = this.loginService.isLoggedIn();

        if (!loggedin) {
            this.loginService.handleLogin(`/${router.path}`);
        }

        return loggedin;
    }
}
