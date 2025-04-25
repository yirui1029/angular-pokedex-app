import { Injectable } from '@angular/core';
import { POKEMON_LIST } from './pokemon-list.fake';
import { Pokemon, PokemonList } from './pokemon.model';

@Injectable()
export class PokemonService {
  getPokemonList(): PokemonList {
    return POKEMON_LIST;
  }
  getPokemonById(id: number): Pokemon {
    const pokemon = POKEMON_LIST.find((pokemon) => pokemon.id === id);
    if (!pokemon) {
      throw new Error('Pokemon not found with id: ' + id);
    } else {
      return pokemon;
    }
  }

  getPokemontypes(): string[] {
    return [
      'Normal',
      'Feu',
      'Eau',
      'Plante',
      'Insecte',
      'Poison',
      'Vol',
      'Electrik',
      'Fée',
      'Combat',
      'Psy',
      'Sol',
      'Roche',
      'Spectre',
      'Acier',
      'Glace',
      'Dragon',
    ];
  }
  
}
