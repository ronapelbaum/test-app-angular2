import {Component, OnInit} from "@angular/core";
import {Hero} from "../heroes/hero";
import {HeroService} from "../heroes/hero.service";
import {Router} from "@angular/router";

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    heroes:Hero[] = [];

    constructor(private heroService:HeroService, private router:Router) {
    }

    ngOnInit():void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero:Hero):void {
        this.router.navigate(['/detail', hero.id]);
    }
}
