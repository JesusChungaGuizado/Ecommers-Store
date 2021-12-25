import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afd:AngularFireAuth ) { }

  createUser(email:string,password:string){
    return this.afd.createUserWithEmailAndPassword(email,password);
  }
  login(email:string,password:string){
    return this.afd.signInWithEmailAndPassword(email,password);
  }

  logOuth(){
    return this.afd.signOut();
  }

  hasUser(){
    return this.afd.authState;
  }
}
