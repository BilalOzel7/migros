import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  hide=true;
  users:User[]
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.login();
  }

  createLoginForm(){
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      password:new FormControl('',Validators.required),
      captcha:new FormControl('',Validators.required)
    });
  }

  login() {
    if(this.loginForm.valid)
    console.log(this.loginForm.value);
    let loginModel=Object.assign({},this.loginForm.value)

    this.loginService.login(loginModel).toPromise().then(response=>{
      if(this.users==response.data)
       response.data;
    
    })
  }
}
