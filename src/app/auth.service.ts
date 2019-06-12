import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth = environment.path + '/auth'
  TOKEN_KEY = 'token'

  constructor(private http: HttpClient) { }

  get token(){
    return localStorage.getItem(this.TOKEN_KEY);
  }
  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
  logout(){
    localStorage.removeItem(this.TOKEN_KEY);
  }

  RegisterUser(registerData) {
    return  this.http.post<any>( this.auth + '/register', registerData).subscribe(res => {
            this.saveToken(res.token)
          })
   }

   userLogin(loginData) {
    return  this.http.post<any>( this.auth + '/login', loginData).subscribe(res => {
   
      this.saveToken(res.token)
    })
    
   }

   saveToken(token){
    localStorage.setItem(this.TOKEN_KEY, token);
   }
}
