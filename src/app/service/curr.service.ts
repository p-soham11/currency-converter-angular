import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../model/currency';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrService {
  private apiUrl = 'https://api.freecurrencyapi.com/v1/latest';
  private apiKey = 'fca_live_ZSZ7liZC5kbW7LLD9os8xywtgEYbtITSUxHiL8ry';

  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?apikey=${this.apiKey}`);
  }
}
