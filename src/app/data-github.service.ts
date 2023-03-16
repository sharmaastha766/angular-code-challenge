import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataGithubService {
 private url= "https://api.github.com/users";

  
  constructor(private http: HttpClient) {
  }

  getGithubData(): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer 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`
    });

    const requestOptions = { headers: headers };
  
    return this.http.get(this.url,requestOptions);
  }
}

