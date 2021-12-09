import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { NewHeroesComponent } from './new-heroes/new-heroes.component';
import { CoffeeMenuComponent } from './coffee-menu/coffee-menu.component';
const routes: Routes = [
  { path: '', redirectTo: '/coffee-menu', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'add', component: AddHeroComponent },
  { path: 'new-heroes', component: NewHeroesComponent },
  { path: 'coffee-menu', component: CoffeeMenuComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
