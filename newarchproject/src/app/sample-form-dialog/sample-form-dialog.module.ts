import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { SampleFormDialogRoutingModule } from './sample-form-dialog-routing.module';
import { DialogcomponentComponent } from './dialogcomponent/dialogcomponent.component';
import { FromcomponentComponent } from './formcomponent/fromcomponent.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DialogcomponentComponent,
    FromcomponentComponent
  ],
  imports: [
    CommonModule,
    SampleFormDialogRoutingModule,
    MatInputModule,
    FormsModule
  ],
  exports:[ DialogcomponentComponent,FromcomponentComponent]
})
export class SampleFormDialogModule { }
