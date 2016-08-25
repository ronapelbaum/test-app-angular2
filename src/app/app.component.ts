import {Component} from "@angular/core";
import {HeroesComponent} from "./heroes/heroes.components";

@Component({
    selector: 'my-app',
    entryComponents: [
        HeroesComponent
    ],
    template: `<h1>{{title}}</h1>
               <heroes></heroes>`
})
export class AppComponent {
    title = 'Tour of Heroes';
}