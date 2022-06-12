import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipesModule } from './pipes/pipes.module';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { CoffeeMenuModule } from './coffee-menu/coffee-menu.module';

//ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { fileReducer } from './store/reducers/file/file.reducers';
import { FileEffects } from 'src/app/store/reducers/file/file.effects';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    AddMenuComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({file:fileReducer}),
    CoffeeMenuModule,
    EffectsModule.forRoot([FileEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    NgbModule,
    ReactiveFormsModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
