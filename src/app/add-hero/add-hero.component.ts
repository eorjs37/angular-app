import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { max } from 'rxjs/operators';
import { Hero } from '../models/hero';
import { HeroService } from '../service/hero.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
  hero!: Hero;
  constructor(private heroService: HeroService,private location:Location) {
    const heroitem = {
      id: -1,
      name: ''
    };
    this.hero = heroitem;
    this.heroService.getHeroes().subscribe(data => {
      from(data).pipe(
        max<Hero>((x:Hero,y:Hero)=> x.id < y.id ? -1 : 1)
      ).subscribe(result => {
        this.hero.id = result.id + 1;
        this.hero.name = '';
      })
    })
  }

  ngOnInit(): void {
  }

  addHero() {
    this.heroService.addHero(this.hero).subscribe(data => {
      this.location.back();
    })
  }
}
