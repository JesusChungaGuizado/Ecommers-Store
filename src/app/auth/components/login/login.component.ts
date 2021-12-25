import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form :FormGroup;
  hide = true;
  constructor(
    private forBuilder:FormBuilder,
    private router:Router,
    private authService:AuthService
  ) {
    this.builFormLogin();
   }

  ngOnInit(): void {
  }

  login( event:Event){
    event.preventDefault();
    if(this.form.valid){
      const value=this.form.value;
      this.authService.login(value.email,value.password)
      .then(()=>{
        this.router.navigate(['/admin'])
      })
      .catch(()=>{
        alert("No es valido")
      })
    }

  }
  private builFormLogin(){
    this.form=this.forBuilder.group({
      // user:['',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required,Validators.email]]
    })
  }
  // getErrorUser(){
  //   if(this.userField?.hasError("required")){
  //     return 'El campo usuario esta vacío'
  //   }else if(this.userField?.hasError("minlength")){
  //     return 'Este campo debe tener al menos 4 caracteres'
  //   }else if(this.userField?.hasError("maxlength")){
  //     return 'Este campo debe tener max 20 caracteres'
  //   }
    
  // }
  getErrorEmail(){
    if(this.emailField?.hasError("required")){
      return 'El campo email esta vacío'
    }
    if(this.emailField?.hasError("email")){
      return 'Ingrese un email correcto'
    }
  }
  getErrorPass(){
    if(this.passField?.hasError("required")){
      return 'El campo password esta vacío'
    }
    if(this.passField?.hasError("minlength")){
      return 'Este campo debe tener al menos 6 caracteres'
    }
  }
  // get  userField(){
  //   return this.form.get('user');
  // }
  get passField(){
    return this.form.get('password');
  }
  get emailField(){
    return this.form.get('email');
  }

}
