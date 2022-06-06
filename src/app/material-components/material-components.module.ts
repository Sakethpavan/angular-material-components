import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsComponent } from './material-components.component';
import { RouterModule } from '@angular/router';
import { materialRoutes } from './material-component.routing';


@NgModule({
  declarations: [
    MaterialComponentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(materialRoutes),
  ],
  exports: [
    MaterialComponentsComponent,
    RouterModule,
  ]
})
export class MaterialComponentsModule { }
