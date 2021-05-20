import { NgModule } from '@angular/core';
import { RiveModule } from 'ng-rive';
import { DarkModeToggleComponent } from './dark-mode-toggle.component';



@NgModule({
  declarations: [
    DarkModeToggleComponent
  ],
  imports: [
    RiveModule
  ],
  exports: [
    DarkModeToggleComponent
  ]
})
export class DarkModeToggleModule { }
