import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPokemons from './pokemons/pokemons.reducer';
import { PokemonsEffects } from './pokemons/pokemons.effects';
import { PokemonsFacade } from './pokemons/pokemons.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromPokemons.POKEMONS_FEATURE_KEY,
      fromPokemons.pokemonsReducer
    ),
    EffectsModule.forFeature([PokemonsEffects]),
  ],
  providers: [PokemonsFacade],
})
export class CoreStateModule {}
