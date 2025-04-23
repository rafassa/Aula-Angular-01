import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login=""
  senha=""
  
  loginSenha:{login:string, senha:string}[]=[]
  constructor(private router:Router){}
  Login(){
    const loginTemp = this.login
    this.loginSenha.push({  login:this.login, senha:this.senha})
    this.login=""
    this.senha=""
    this.router.navigate(['funcionario'], {queryParams:{login:loginTemp}})
  }
  
  removeLogin(logins:string){
  this.loginSenha=  this.loginSenha.filter((usuarios)=>usuarios.login!=logins)
  }
  
}
