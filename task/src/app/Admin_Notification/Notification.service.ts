import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

constructor(private http:HttpClient) { }
getResume(){
  return this.http.get("http://localhost:3000/resume")
}

}
