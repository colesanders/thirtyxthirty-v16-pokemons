import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PokemonsComponent } from './pokemons/pokemons.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { UiLoginModule } from '@thirty/ui-login';
import { LoginComponent } from '@thirty/ui-login';
import { PokemonsOverviewComponent } from './pokemons/components/pokemons-overview/pokemons-overview.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonsComponent,
  children: [
    {
      path: ':id', // child route path
      component: PokemonsOverviewComponent // child route component that the router renders
    }
  ]
},
  { path: 'login', component: LoginComponent},
  { path: '404', component: FourOhFourComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: FourOhFourComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiLoginModule,
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
