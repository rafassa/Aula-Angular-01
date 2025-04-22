import { Component } from '@angular/core';
import { routes } from './app.routes';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}


