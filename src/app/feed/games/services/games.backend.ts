import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GamesBackend {
  gamesUrl = environment.baseUrl + '/games.php';

  constructor(private http: HttpClient) {}

  getGames = () => this.http.get(this.gamesUrl);
}
