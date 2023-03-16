import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
  }

  public onTabClick(event: any): void { // clicked tab can be get using event.index
    console.log("reachedddd", event.index);
    // if(event.index==0)
    //   this.router.navigate(['home']);
    // else
    // {
    //   this.router.navigate(['history']);
    // }
}

}
