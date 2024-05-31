import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component,Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

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
 }
