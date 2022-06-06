import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialComponentsModule } from './material-components/material-components.module';

MaterialComponentsModule
const routes: Routes = [
  {
    path: "material",
    loadChildren : ()=> MaterialComponentsModule,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
