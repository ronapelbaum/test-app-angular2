import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {Http} from "@angular/http";

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';  // URL to web api

    constructor(private http:Http) {
    }

    getHeroes():Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    private handleError(error:any):Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getHero(id:number):Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}
