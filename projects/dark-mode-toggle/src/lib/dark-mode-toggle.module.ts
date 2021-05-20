import { NgModule } from '@angular/core';
import { RiveModule, RIVE_FOLDER } from 'ng-rive';
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
  ],
  providers : [
    {
      provide : RIVE_FOLDER,
      useValue : 'assets'
    }
  ]
})
export class DarkModeToggleModule { }
