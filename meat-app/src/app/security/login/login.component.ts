import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { User } from './user.model';
import { NotificationService } from 'app/shared/messages/snackbar/notification.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  navigateTo: string;

  constructor(private fb: FormBuilder, private loginService: LoginService, private notificacaoService: NotificationService,
    private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: this.fb.control('', [Validators.email, Validators.required]),
      password: this.fb.control('', [Validators.required])
    });

    this.navigateTo = this.activateRouter.snapshot.params['to'] || btoa('/');
  }

  login() {
    this.loginService.login(this.formLogin.value.email, this.formLogin.value.password).subscribe((user: User) => {
      this.notificacaoService.notify('bem vindo: ' + user.email);
    }, (response) => {
      this.notificacaoService.notify(response.error.message)
    }, () => {
      this.router.navigate([atob(this.navigateTo)]);
    });
  }
}
