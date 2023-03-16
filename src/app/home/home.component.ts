import { Component, OnInit } from '@angular/core';
import { DataGithubService } from '../data-github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  allData:any={}
  showData:boolean=false;
  history:any=[];

  searchText:any="";
  constructor(private dataGithubService:DataGithubService) { }

  ngOnInit(): void {
    this.getDashboardData();
  }

  getDashboardData() {
    this.dataGithubService.getGithubData().subscribe(data => {
      if (data) {
        console.log(data);
        this.allData=data;
      }
    });
  }

  searchUser()
  { 
    console.log("searchededdd");
    this.showData=true;
    var resArray: { login: string; }[]=[];
    this.allData.forEach((element: { login: string; }) => {
      if (element.login.toLowerCase().includes(this.searchText))
        resArray.push(element);
        this.history.push(element);
    });
    this.allData=resArray
    return this.allData;
    
  }

}
