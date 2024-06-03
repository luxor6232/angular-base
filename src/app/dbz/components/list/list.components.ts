import { Character } from './../../interfaces/character.interface';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dbz-list',
  // standalone: true,
  templateUrl: './list.components.html',
  styleUrl: './list.components.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {

  @Input('character_list_main')
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  // onDelete = Index value : number
  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index: number): void {
  //   //emitir el id del personaje
  //   this.onDelete.emit(index);
  // }

  deleteCharacterById(id: string): void {
    //emitir el id del personaje
    this.onDelete.emit(id);
    // console.log(index);
  }


}
