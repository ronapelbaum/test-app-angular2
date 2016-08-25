import {Routes, RouterModule} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.components";
import {AppComponent} from "./app.component";


const appRoutes:Routes = [
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: HeroesComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
