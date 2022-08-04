import { Injectable } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Injectable({
  providedIn: 'root'
})

export class AnalyticsService {

  constructor(private analytics: AngularFireAnalytics) {
    
   }

  logPageView(pageName:string){
    console.log(this.analytics)
    this.analytics.logEvent('page_view',{"pageName":pageName});
  }
}
