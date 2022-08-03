import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiEndPoints } from '../constants/end-points'

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private https:HttpClient) { }

  getHome():Observable<any>{
    return this.https.get(apiEndPoints.DOMAIN_URL);
  }
}
