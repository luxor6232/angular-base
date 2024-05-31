import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main-page.components.html'
})

export class MainPageComponents {
  public character: Character[] = [
    {
      name: 'krilin',
      power: 1000
    }, {
      name: 'Goku',
      power: 9500
    }
  ];
}
