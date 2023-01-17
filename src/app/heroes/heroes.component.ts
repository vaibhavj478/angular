import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';


import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  
  // selectedHero?:Hero
  
  heroes: Hero[] = [];
  
  constructor(private heroService:HeroService , private messageService:MessageService) { }

  ngOnInit( obj:Number =2 ): void {
    this.getHeroes();
    console.log(obj);
  }

  // getHeroes():void{
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes=> this.heroes=heroes);
        // .subscribe(heroes => this.heroes = heroes);
  }

  // onSelect(hero:Hero):void{
  //      this.selectedHero= hero;
  //      this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);

  // }

}
