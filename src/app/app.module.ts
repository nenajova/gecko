import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GeckoAppComponent } from './gecko-app.component';
import { SeasonListComponent } from './season-list/season-list.component'
import { SeasonDetailsComponent } from './season-details/season-details.component'

import { ChampionshipService } from './shared/championship.service'

import { HttpClientModule } from '@angular/common/http'

import { RouterModule } from '@angular/router'
import { appRoutes } from './routes'


@NgModule({
  declarations: [
    GeckoAppComponent,
    SeasonListComponent,
    SeasonDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)    
  ],
  providers: [
    ChampionshipService
  ],
  bootstrap: [GeckoAppComponent]
})
export class AppModule { }
