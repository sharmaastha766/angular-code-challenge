import { Component, OnInit } from '@angular/core';
import { PreviousSearchesService } from '../previous-searches.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historyList: any;

  constructor(private previousSearchesServices:PreviousSearchesService) { }

  ngOnInit(): void {

    this.previousSearchesServices.historyList.subscribe(value => {
      this.historyList = value;
    });
  }

  deleteHistory()
  {
    this.previousSearchesServices.changeHistory([]);
  }

}
