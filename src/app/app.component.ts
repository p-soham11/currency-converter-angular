import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrService } from './service/curr.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  primary: any = 'INR';
  secondary: any = 'USD';
  multiplier: any = 0;
  rates: any = {};
  amount: number = 1;
  currencies: string[] = [];
  convertedAmount: number | null = null;

  constructor(private currService: CurrService) {}

  ngOnInit(): void {
    this.currService.getExchangeRates().subscribe((response) => {
      this.rates = response.data;
      this.currencies = Object.keys(this.rates);
      this.convertCurrency();
    });
  }

  convertCurrency() {
    if (this.rates[this.primary] && this.rates[this.secondary]) {
      const conversionRate =
        this.rates[this.secondary] / this.rates[this.primary];
      this.convertedAmount = this.amount * conversionRate;
    } else {
      this.convertedAmount = null;
    }
  }
}
