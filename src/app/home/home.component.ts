import { Component, OnInit } from '@angular/core';
import { DataGithubService } from '../data-github.service';

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
  constructor(private dataGithubService:DataGithubService) { }

  ngOnInit(): void {
    // this.getDashboardData();
  }

  getDashboardData() {
    this.dataGithubService.getGithubData(this.searchText).subscribe(data => {
      if (data) {
        this.showData=true;
        console.log(data);
        this.allData.push(data);
        console.log(this.allData);
        
      }
    });
  }

//   searchUser()
//   { 
//     console.log("searchededdd");
//     this.getDashboardData();
//     // this.showData=true;
//     // var resArray: { login: string; }[]=[];
//     // this.allData.forEach((element: { login: string; }) => {
//     //   if (element.login.toLowerCase().includes(this.searchText))
//     //     resArray.push(element);
//     //     this.history.push(element);
//     // });
//     // this.allData=resArray
//     // console.log(this.allData);
//     // return this.allData;
    
//   }

}
