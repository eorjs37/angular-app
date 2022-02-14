import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeMenuComponent } from './coffee-menu/coffee-menu.component';
import { CoffeeSelectedComponent } from './coffee-menu/coffee-selected/coffee-selected.component';
import { AddCoffeeMenuComponent } from './coffee-menu/add-coffee-menu/add-coffee-menu.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
const routes: Routes = [
  { path: '', redirectTo: '/coffee-menu', pathMatch: 'full' },
  {
    path: 'coffee-menu',
    component: CoffeeMenuComponent,
    children: [
      { path: 'menu-one', component: CoffeeSelectedComponent },
      { path: 'add-coffee', component: AddCoffeeMenuComponent}
    ]
  },
  {
    path: 'rxjs',
    component: RxjsComponent
  },
  {
    path: 'add-coffee',
    component:AddMenuComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
