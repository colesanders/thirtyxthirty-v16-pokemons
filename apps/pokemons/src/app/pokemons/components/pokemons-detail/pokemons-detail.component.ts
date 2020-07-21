import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Pokemon } from '@thirty/api-interfaces';


@Component({
  selector: 'thirty-pokemons-detail',
  templateUrl: './pokemons-detail.component.html',
  styleUrls: ['./pokemons-detail.component.scss']
})
export class PokemonsDetailComponent implements OnInit, OnChanges{
  @Input() pokemon: Pokemon;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  pokemonForm: FormGroup;

  pokemonTypes = ['Standard Pokemon', 'Rocking Pokemon', 'Stool'];
  seatShapes = ['Round', 'Square', 'Formed'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  ngOnChanges(){
    if(this.pokemonForm && this.pokemon){
      this.pokemonForm.patchValue(this.pokemon)
    } else if(this.pokemonForm){
      this.cancel();
    }
  }

  cancel(){
    this.pokemonForm.reset();
    this.pokemonForm.value.weight = 0;
  }

  createFormGroup(){
    this.pokemonForm = this.formBuilder.group({
      id: [],
      name: new FormControl('', [
        Validators.required,
      ]),
      species: new FormControl('', [
        Validators.required,
      ]),
      typing: new FormControl('', [
      ]),
      weight: new FormControl(0, [
        Validators.required,
      ])
    })
  }
}
