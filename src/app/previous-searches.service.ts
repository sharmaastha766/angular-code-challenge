import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreviousSearchesService {

  constructor() { }

  private previousSearch = new BehaviorSubject<any>([]);

  historyList = this.previousSearch.asObservable();


  changeHistory(previous: any) {
    this.previousSearch.next(previous);
  }
}
