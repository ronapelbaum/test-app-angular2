import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    providers: [HeroService]

})
export class HeroesComponent implements OnInit {

    heroes:Hero[];
    selectedHero:Hero;

    constructor(private heroService:HeroService, private router:Router) {
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

    gotoDetail(hero:Hero):void {
        this.router.navigate(['/detail', hero.id]);
    }
}