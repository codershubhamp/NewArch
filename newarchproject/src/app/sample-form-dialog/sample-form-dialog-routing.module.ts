import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogcomponentComponent } from './dialogcomponent/dialogcomponent.component';
import { FromcomponentComponent } from './formcomponent/fromcomponent.component';

const routes: Routes = [
  {path:'dialogcomponent',component:DialogcomponentComponent},
  {path:'formcomponent',component:FromcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleFormDialogRoutingModule { }
