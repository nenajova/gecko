import { Component, OnInit } from '@angular/core';
import { ChampionshipService } from './../shared/championship.service';


@Component({
  templateUrl: './season-list.component.html',
  styles: [`
    .year {
      width: 75px;
      float: left;
      margin-right: 20px;
      cursor: pointer;
    }
    ul {
      margin-top: 30px;
    }
  `]
})
export class SeasonListComponent implements OnInit {

  season_list: any;

  constructor (private championshipService: ChampionshipService) {
  }

  ngOnInit() {
    this.championshipService.getSeasons()
      .subscribe((data: any) => {
        this.season_list = data.MRData.SeasonTable.Seasons
      })
  }
}