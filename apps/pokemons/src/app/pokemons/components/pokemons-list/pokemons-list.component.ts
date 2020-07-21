import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '@thirty/api-interfaces';

@Component({
  selector: 'thirty-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {
  @Input() pokemons: [Pokemon];
  @Output() selected = new EventEmitter<Pokemon>();
  @Output() deleted = new EventEmitter<Pokemon>();
  constructor() { }

  ngOnInit(): void {
  }

}
