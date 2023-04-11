import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [AppComponent, TestComponent, LoginComponent, SignUpComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, NotifierModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
