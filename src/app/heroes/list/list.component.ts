import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroName:string[] = ['hulk','spiderman', 'captain america', 'iron man'];

  DeleteHero?:string;

  RemoveHeroList():void{
    this.DeleteHero = this.heroName.pop();
  }
}
