import {Routes, RouterModule} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.components";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


const appRoutes:Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
