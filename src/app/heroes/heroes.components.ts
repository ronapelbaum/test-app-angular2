import {Component} from "@angular/core";

export class Hero {
    id:number;
    name:string;
}

@Component({
    selector: 'heroes',
    template: `
            <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name">
            </div>
            `
})
export class HeroesComponent {
    hero:Hero = {
        id: 1,
        name: 'Windstorm'
    };
}