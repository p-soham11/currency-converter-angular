import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Data } from '../model/currency';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrServiceService {
  constructor(private http: HttpClient) {
    baseURL: 'https://api.freecurrencyapi.com/v1/latest';
  }

  this;
}
