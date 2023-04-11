import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  signUp(): void {
    const form = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    };
    this.authService.signUp();
  }
}
