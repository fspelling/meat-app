import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { MEAT_API } from '../../app.api';
import { User } from './user.model';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import { Router, NavigationEnd } from "@angular/router";

@Injectable()
export class LoginService {
    user: User;
    lastURL: string;

    constructor(private http: HttpClient, private router: Router) {
        this.router.events.filter(e => e instanceof NavigationEnd).subscribe((e: NavigationEnd) => this.lastURL = e.url);
    }

    isLoggedIn(): boolean {
        return this.user !== undefined;
    }

    handleLogin(path: string = this.lastURL) {
        this.router.navigate(['/Login', btoa(path)])
    }

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>(`${MEAT_API}/login`, { email: email, password: password }).do(user => this.user = user);
    }

    logout() {
        this.user = undefined;
    }
}
