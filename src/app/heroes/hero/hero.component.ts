import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  name: string = 'tony';
  age: number = 45;

  get capitalizedName(): string { //getter y setter
    return this.name.toUpperCase();
  }

  getHeroDescription():string{ // metodos
    return `${this.name} - ${this.age}`;
  }

  ChangeName():string{
    return this.name = 'steven';
  }

  ChangeAge():number{
    return this.age = 35;
  }
  resetFrom():void{
    this.name = 'tony';
    this.age = 45;
  }
}
