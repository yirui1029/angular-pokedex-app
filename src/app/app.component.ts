import { Component, computed, inject, signal } from '@angular/core';

 import { Pokemon } from './pokemon.model';
import { PokemonBorderDirective } from './pokemon-border.directive';
import { DatePipe } from '@angular/common';
import { PokemonService } from './pokemon.service';


 
 @Component({
   selector: 'app-root',
   standalone: true,
   imports: [PokemonBorderDirective,DatePipe],
   
   templateUrl: './app.component.html',
   styleUrl: './app.component.css',
   providers: [PokemonService],
 })
 export class AppComponent {
   readonly #pokemonservice=inject(PokemonService);

   readonly pokemonList = signal(this.#pokemonservice.getPokemonList());
   readonly searchTerm=signal('')
   
  readonly filteredPokemonList=computed(() => {
    const searchTerm=this.searchTerm();
    const pokemonList=this.pokemonList();
     return pokemonList.filter(pokemon=>pokemon.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
   });
   
 
   size(pokemon: Pokemon) {
     if (pokemon.life <= 15) {
       return 'Petit';
     }
     if (pokemon.life >= 25) {
       return 'Grand';
     }
 
     return 'Moyen';
   }
 
   incrementLife(pokemon: Pokemon) {
     pokemon.life = pokemon.life + 1;
   }
 
   decrementLife(pokemon: Pokemon) {
     pokemon.life = pokemon.life - 1;}}
