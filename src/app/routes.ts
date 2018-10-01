import { Routes } from '@angular/router'
import { SeasonListComponent } from './season-list/season-list.component'
import { SeasonDetailsComponent } from './season-details/season-details.component'

export const appRoutes: Routes = [
  { path: 'seasons', component: SeasonListComponent },
  { path: 'seasons/:year', component: SeasonDetailsComponent },
  { path: '', redirectTo: '/seasons', pathMatch: 'full' }
]