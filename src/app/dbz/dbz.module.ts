import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponents } from './pages/main-page.components';
import { ListComponent } from './components/list/list.components';
import { AddCharacterComponent } from './components/add-character/add-character.component';


@NgModule({
  declarations: [
    MainPageComponents,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainPageComponents

  ]

})
export class DbzModule { }
