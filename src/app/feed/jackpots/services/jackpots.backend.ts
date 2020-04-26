import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JackpotsBackend {
  jackpotsUrl = environment.baseUrl + '/jackpots.php';

  constructor(private http: HttpClient) {}

  getJackpots = () => this.http.get(this.jackpotsUrl);
}
