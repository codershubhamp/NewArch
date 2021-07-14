import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScorePanelComponent } from './score-panel/score-panel.component';
import { HomeComponent } from './home.component';
import {TimeFormat} from './score-panel/time-format.pipe'
import { DialogcomponentComponent } from '../sample-form-dialog/dialogcomponent/dialogcomponent.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    ScorePanelComponent,
    HomeComponent,
    TimeFormat
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports:[HomeComponent],
  entryComponents:[DialogcomponentComponent]
  
})
export class HomeModule { }
