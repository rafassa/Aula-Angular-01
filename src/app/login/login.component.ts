import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login=""
  senha=""
  
  loginSenha:{login:string, senha:string}[]=[]
  
  addLogin(){
    this.loginSenha.push({  login:this.login, senha:this.senha})
    console.log(this.loginSenha)
    this.login=""
    this.senha=""
  }
  
  removeLogin(logins:string){
  this.loginSenha=  this.loginSenha.filter((usuarios)=>usuarios.login!=logins)
  }
  
}
