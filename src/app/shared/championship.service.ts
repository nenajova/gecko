import { Injectable } from '@angular/core'

import { Subject, Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class ChampionshipService {

  private apiUrl: string = 'http://ergast.com/api/f1/'
  
  constructor(private http: HttpClient) {
  }

  getSeasons() {
    return this.http.get(this.apiUrl + 'seasons.json?limit=14&offset=55')
  }

  getDetails(year: number) {
    return this.http.get(this.apiUrl + year + '/results/1.json')
  }

  getChampion(year: number) {
    return this.http.get(this.apiUrl + year + '/driverstandings/1.json')
  }
  
}