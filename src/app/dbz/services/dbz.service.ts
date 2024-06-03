import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.error(uuid())
@Injectable({providedIn: 'root'})
export class dbzService {
  public character: Character[] = [
    {
      id:uuid(),
      name: 'krilin',
      power: 1000
    }, {
      id:uuid(),
      name: 'Goku',
      power: 9500
    }
  ];
  onNewCharacter(character: Character): void {
    const newCharacter: Character = {
      id:uuid(), ...character
    }
    this.character.push(newCharacter);
  };

  // onDeleteCharacter(index:number){
  //   this.character.splice(index,1);
  // }

  deleteCharacterById(id:string){
    this.character = this.character.filter(character => character.id !== id);
  }

}
