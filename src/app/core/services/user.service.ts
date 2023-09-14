import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseURI } from '../shared/baseURL';


const routes = {
  getUsers: 'users',
  createUser: 'users',
  deleteUser: 'users',
  editUser: 'users',
  getUser: 'users'

};

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseURI{
  constructor(private http : HttpClient) {
     super()
   }

   getUsers(){
    return this.http.get(`${this.baseUrl}/${routes.getUsers}`)
  }

  createUser(payload : any){
    return this.http.post(`${this.baseUrl}/${routes.createUser}`, payload)
  }
  deleteUser(userId : string){
    return this.http.delete(`${this.baseUrl}/${routes.getUsers}/${userId}`)
  }
  editUser(payload : {}, userId : string){
    return this.http.put(`${this.baseUrl}/${routes.getUsers}/${userId}`, payload)
  }

  getUser(userId : string){
    return this.http.get(`${this.baseUrl}/${routes.getUsers}/${userId}`)
  }

}
