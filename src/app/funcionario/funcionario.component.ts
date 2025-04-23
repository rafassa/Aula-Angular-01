import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-funcionario',
  imports: [],
  templateUrl: './funcionario.component.html',
  styleUrl: './funcionario.component.css'
})
export class FuncionarioComponent {
constructor(private route:ActivatedRoute){}
name:string | null=""
ngOnInit(){
  this.route.queryParams.subscribe(params =>{
    this.name=params['login']
})}

}


