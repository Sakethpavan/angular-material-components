import { Expansion } from "@angular/compiler";
import { Routes } from "@angular/router";
import { CardComponent } from "./components/card/card.component";
import { ExpansionPanelComponent } from "./components/expansion-panel/expansion-panel.component";
import { StepperComponent } from "./components/stepper/stepper.component";
import { TabsComponent } from "./components/tabs/tabs.component";
import { LayoutsComponent } from "./layouts.component";

export const layoutRoutes: Routes = [
    {
        path: "",
        component: LayoutsComponent
    },
    {
        path: "card",
        component: CardComponent
    },
    {
        path: "expansion-panel",
        component: ExpansionPanelComponent
    },
    {
        path: "stepper",
        component: StepperComponent
    },
    {
        path: "tab",
        component: TabsComponent
    },
];
