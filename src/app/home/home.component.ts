import { Component, OnInit } from '@angular/core';
import { DataGithubService } from '../data-github.service';
import { PreviousSearchesService } from '../previous-searches.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  allData:any=[]
  showData:boolean=false;
  history:any=[];

  searchText:any="";
  constructor(private dataGithubService:DataGithubService, private previousSearchesService:PreviousSearchesService) { }

  ngOnInit(): void {
    // this.getDashboardData();
  }

  getDashboardData() {
    this.dataGithubService.getGithubData(this.searchText).subscribe(data => {
      this.allData=[];
      if (data) {
        this.showData=true;
        console.log(data);
        this.allData.push(data);
        this.history.push(data);
        this.previousSearchesService.changeHistory(this.history);
      }
    });
  }

}
