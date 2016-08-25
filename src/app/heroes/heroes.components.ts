import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";

@Component({
    selector: 'toh',
    template: `
            <h2>My Heroes</h2>
            <ul class="heroes">
              <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
              </li>
            </ul>
            <my-hero-detail [hero]="selectedHero"></my-hero-detail>
            `,
    styleUrls: ['./heroes.css'],
    entryComponents: [
        HeroDetailComponent
    ],
    providers: [HeroService]

})
export class HeroesComponent implements OnInit {

    heroes:Hero[];
    selectedHero:Hero;

    constructor(private heroService:HeroService) {
    }

    getHeroes():void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero:Hero):void {
        console.log(hero);
        this.selectedHero = hero;
    }

    ngOnInit():void {
        this.getHeroes();
    }
}