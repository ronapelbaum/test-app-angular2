import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule, XHRBackend} from "@angular/http";
import {AppComponent} from "./app.component";
import {HeroService} from "./heroes/hero.service";
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroDetailComponent} from "./heroes/hero-detail.component";
import {routing} from "./app.routing";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {InMemoryBackendService, SEED_DATA} from "angular2-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    providers: [
        HeroService,
        {provide: XHRBackend, useClass: InMemoryBackendService}, // in-mem server
        {provide: SEED_DATA, useClass: InMemoryDataService}     // in-mem server data
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
