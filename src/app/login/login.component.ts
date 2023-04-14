import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private notifier: NotifierService, private router: Router,) {}

  ngOnInit(): void {}

  login(): void {
    const form = {
      email: this.email,
      password: this.password,
    };
    this.authService.login(form).then((res: any) => {
      if (res === true){
        this.router.navigate([`/story`]);
      } else {
        this.notifier.notify('error', 'Error');
      }
    });
  }
}
