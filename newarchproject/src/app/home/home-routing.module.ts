import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScorePanelComponent } from './score-panel/score-panel.component';

const routes: Routes = [
    {
        path: "scorepanel",
          component: ScorePanelComponent,
          children: [
              
              //{path: '', redirectTo: '/login', pathMatch: "full" },
              {path: "", loadChildren: "./score-panel/score-panel.module#ScorePanelModule",pathMatch: "full" },
              
          ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
