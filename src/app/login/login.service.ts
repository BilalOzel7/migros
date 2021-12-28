import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from './responseModel';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private httpClient:HttpClient) { }

login(loginModel: User){
  return this.httpClient.post<ResponseModel<User>>("https://61cb5311194ffe0017788d07.mockapi.io/api/migrosyemek",loginModel)
}
}
