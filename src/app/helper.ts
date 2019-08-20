import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Helper {
  stringPluralForm(num, after, showNumber = true) {
    const cases = [2, 0, 1, 1, 1, 2];
    return showNumber ?
      `${num} ${after[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[Math.min(num % 10, 5)]]}` :
      `${after[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[Math.min(num % 10, 5)]]}`;
  }
}
