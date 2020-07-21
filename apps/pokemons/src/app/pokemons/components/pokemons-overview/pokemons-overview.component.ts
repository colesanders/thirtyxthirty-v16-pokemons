import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '@thirty/api-interfaces';
import { PokemonsFacade } from '@thirty/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'thirty-pokemons-overview',
  templateUrl: './pokemons-overview.component.html',
  styleUrls: ['./pokemons-overview.component.scss']
})
export class PokemonsOverviewComponent implements OnInit, OnChanges {
  pokemon$: Observable<Pokemon> = this.pokemonFacade.selectedPokemon$;


  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonFacade: PokemonsFacade
  ) { }

  ngOnInit(): void {
    this.get();
    this.pokemonFacade.mutations$.subscribe((action: any) => this.get());

  }

  ngOnChanges(): void{
    this.get();
  }


  get(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pokemonFacade.selectPokemon(id);
  }

  close(){
    this.pokemonFacade.resetSelectedPokemon();
    this.router.navigate(['/pokemons']);
  }
}
