import {Routes, RouterModule} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.component";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./heroes/hero-detail.component";


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
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
