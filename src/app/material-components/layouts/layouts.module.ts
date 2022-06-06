import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { layoutRoutes } from './layout.routing';
import { LayoutsComponent } from './layouts.component';
import { CardComponent } from './components/card/card.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { MatCardModule } from '@angular/material';


@NgModule({
  declarations: [
    LayoutsComponent,
    CardComponent,
    ExpansionPanelComponent,
    StepperComponent,
    TabsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(layoutRoutes)
  ],
  exports: [
    LayoutsComponent,
    RouterModule
  ]
})
export class LayoutsModule { }
