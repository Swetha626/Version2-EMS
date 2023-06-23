import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LeaveService {

url:any="http://localhost:3000/paymentHistory";
constructor(private http:HttpClient) { }
searchPayment(mobile: any): Observable<any> {
  return this.http.get<any>(this.url).pipe(
    map((data) => {
      return data.filter(
        (item:any) =>
          item.phone === mobile
      );
    })
  );
}
}
