import { Injectable } from '@angular/core';
import { PokemonsService } from '@thirty/core-data';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';
import * as PokemonsActions from './pokemons.actions';
import { Pokemon } from '@thirty/api-interfaces';

@Injectable()
export class PokemonsEffects {
  @Effect() loadPokemons$ = this.actions$.pipe(
    ofType(PokemonsActions.loadPokemons),
    fetch({
      run: (action) => this.pokemonsService.all().pipe(
        map((pokemons: Pokemon[]) => PokemonsActions.loadPokemonsSuccess({ pokemons }))
      ),
      onError: (action, error) => PokemonsActions.loadPokemonsFailure({ error })
    })
  );

  @Effect() loadPokemon$ = this.actions$.pipe(
    ofType(PokemonsActions.loadPokemon),
    fetch({
      run: (action) => this.pokemonsService.byId(action.pokemonId).pipe(
        map((pokemon: Pokemon) => PokemonsActions.loadPokemonSuccess({ pokemon }))
      ),
      onError: (action, error) => PokemonsActions.loadPokemonFailure({ error })
    })
  );

  @Effect() createPokemon$ = this.actions$.pipe(
    ofType(PokemonsActions.createPokemon),
    pessimisticUpdate({
      run: (action) => this.pokemonsService.create(action.pokemon).pipe(
        map((pokemon: Pokemon) => PokemonsActions.createPokemonSuccess({ pokemon }))
      ),
      onError: (action, error) => PokemonsActions.createPokemonFailure({ error })
    })
  );

  @Effect() updatePokemon$ = this.actions$.pipe(
    ofType(PokemonsActions.updatePokemon),
    pessimisticUpdate({
      run: (action) => this.pokemonsService.update(action.pokemon).pipe(
        map((pokemon: Pokemon) => 
          PokemonsActions.updatePokemonSuccess({ pokemon }))
      ),
      onError: (action, error) => PokemonsActions.updatePokemonFailure({ error })
    })
  );

  @Effect() deletePokemon$ = this.actions$.pipe(
    ofType(PokemonsActions.deletePokemon),
    pessimisticUpdate({
      run: (action) => this.pokemonsService.delete(action.pokemon.id).pipe(
        map((pokemon: Pokemon) => PokemonsActions.deletePokemonSuccess({ pokemon })),
      ),
      onError: (action, error) => PokemonsActions.deletePokemonFailure({ error })
    })
  );

  // Effect to refresh the pokemon after an async operation changes the database
  // Made in order to reduce risk of timing errors between async and sync operations
  // @Effect() refreshOnSucces = this.actions$.pipe(
  //   ofType(PokemonsActions.deletePokemonSuccess, PokemonsActions.updatePokemonSuccess),
  //   tap(action => {
  //     PokemonsActions.loadPokemons();
  //   })
  // );

  constructor(
    private actions$: Actions,
    private pokemonsService: PokemonsService
  ) {}
}