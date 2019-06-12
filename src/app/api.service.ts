import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  path = environment.path;

  constructor(private http: HttpClient) { }

  postMessages(postData) {
    return this.http.post(this.path + '/post', postData)
  }
  getMessages(userId) {
   return  this.http.get(this.path + '/posts/' + userId)
  }
  getUsers() {
    return  this.http.get(this.path + '/users')
   }

   getProfile(id) {
    return  this.http.get(this.path + '/profile/'+ id)
   }


  
}
