import { Routes } from "@angular/router";
import { MaterialComponentsComponent } from "./material-components.component";

export const materialRoutes: Routes = [
  {
    path: '',
    component: MaterialComponentsComponent
  },
  {
    path: 'layouts',
    loadChildren: () => import("./layouts/layouts.module").then(m => m.LayoutsModule)
  },
];
