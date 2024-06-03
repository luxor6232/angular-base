import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main-page.components.html'
})

export class MainPageComponents {
  constructor(private dbzService:dbzService){}

  get character():Character[]{
    return [...this.dbzService.character];
  }

  onDeleteCharacter(id:string){
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:Character){
    this.dbzService.onNewCharacter( character);
  }
  // public character: Character[] = [
  //   {
  //     name: 'krilin',
  //     power: 1000
  //   }, {
  //     name: 'Goku',
  //     power: 9500
  //   }
  // ];
  // onNewCharacter(character: Character): void {
  //   this.character.push(character);
  // };

  // onDeleteCharacter(index:number){
  //   this.character.splice(index,1);
  // }
}
