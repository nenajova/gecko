import { Component } from '@angular/core'
import { ChampionshipService } from '../shared/championship.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: './season-details.component.html',
  styles: [`
    .champion { color: #47c647 }
    ul { padding-inline-start: 0px }
  `]
})
export class SeasonDetailsComponent {

  details: any
  year: number
  champion: any

  constructor (
    private championshipService: ChampionshipService, 
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.year = this.route.snapshot.params['year']
    this.championshipService.getDetails(this.year)
      .subscribe((data: any) => {
        this.details = data.MRData.RaceTable.Races
    })
    this.championshipService.getChampion(this.year)
      .subscribe((data: any) => {
        this.champion = 
        data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver
    })
  }

}