import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../service/hero.service';
import { Hero } from '../models/hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  private id!: number;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(this.id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  delete() {
    const confirmWindow = confirm("삭제하시겠습니까?");

    if (confirmWindow) {
      this.heroService.deleteHero(this.id).subscribe(data => {
        console.log('data : ' , data);
        
        this.location.back();
      })
    }
  }
}
