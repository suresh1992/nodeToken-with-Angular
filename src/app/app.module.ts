import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
   MatToolbarModule,
   MatInputModule,
   MatFormFieldModule, MatListModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { MessagesComponent } from './messages/messages.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { AuthInterceptorService } from './auth-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatListModule,
    MatButtonModule,MatToolbarModule,
    MatCardModule,MatFormFieldModule,
    MatInputModule
  ],
  providers: [ ApiService, AuthService, {
     provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
