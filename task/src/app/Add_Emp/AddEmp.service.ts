import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AddEmpService {

constructor(private http:HttpClient) { }
postEmployee(data:any){
  return this.http.post<any>(environment.adminAddemp,data)
  .pipe(map((res:any)=>{
    return res;
  }))
}

getEmployee(){
  return this.http.get<any>(environment.adminAddemp)
  .pipe(map((res:any)=>{
    return res;
  }))
}

updateEmployee(data:any,id:number){
  return this.http.put<any>(environment.adminAddemp,data)
  .pipe(map((res:any)=>{
    return res;
  }))
}

deleteEmployee(id:number){
  return this.http.delete<any>(environment.adminAddemp+id)
  .pipe(map((res:any)=>{
    return res;
  }))
}
}
