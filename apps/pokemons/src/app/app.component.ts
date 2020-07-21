import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'thirty-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appInfo = {
    title: "Pokemon App",
    description: "30x30-V15"
  };

  links = [
    { path: '/pokemons', title: 'Pokemons' },
    { path: '/login', title: 'Login' },
    { path: '/404', title: '404 Test Link'},
  ];

  constructor(private http: HttpClient) {}
  
}
