import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreStateModule } from '@thirty/core-state';
import { CoreDataModule } from '@thirty/core-data';
import { MaterialModule } from '@thirty/material';
import * as fromPokemons from '@thirty/core-state';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';

import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonsOverviewComponent } from './pokemons/components/pokemons-overview/pokemons-overview.component';
import { PokemonsDetailComponent } from './pokemons/components/pokemons-detail/pokemons-detail.component';
import { PokemonsListComponent } from './pokemons/components/pokemons-list/pokemons-list.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';



@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonsOverviewComponent,
    PokemonsDetailComponent,
    PokemonsListComponent,
    FourOhFourComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    CoreStateModule,
    CoreDataModule,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(fromPokemons.pokemonsReducer, {}),
    EffectsModule.forRoot([fromPokemons.PokemonsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


