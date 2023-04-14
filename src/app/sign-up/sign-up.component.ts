import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

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
    private userService: UserService,
    private notifier: NotifierService,
    private router: Router,
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
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email,
      password: this.password,
    };
    this.userService.create(form).subscribe((res: any) => {
      this.router.navigate([`/login`]);
      this.notifier.notify('success', 'Create Account');
    });
  }
}
