import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {HeroService} from "./heroes/hero.service";
import {HeroesComponent} from "./heroes/heroes.components";
import {HeroDetailComponent} from "./heroes/hero-detail.component";
import {routing} from "./app.routing";
import {DashboardComponent} from "./dashboard/dashboard.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
