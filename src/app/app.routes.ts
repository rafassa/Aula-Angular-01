import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { CarrosComponent } from './carros/carros.component';
import { HomeComponent } from './home/home.component';
import { PaginaErroComponent } from './pagina-erro/pagina-erro.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'funcionario', component:FuncionarioComponent},
    {path:'carros', component:CarrosComponent},
    {path:'', component:HomeComponent},
    {path:'**', component:PaginaErroComponent}
    
];
