import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  passwordRepeat: string = '';

  constructor(
    private authService: AuthService,
    private notifier: NotifierService
  ) {}

  ngOnInit(): void {}

  signUp(): any {
    console.log('coucou');
    console.log(this.password);
    console.log(this.passwordRepeat);
    if (this.password !== this.passwordRepeat) {
      console.log('password');
      this.notifier.notify('error', 'You have not same password');
      return false;
    }

    const form = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    };
    this.authService.signUp(form);
  }
}
