import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  public url='http://localhost:5000'
  constructor(public httpClient:HttpClient) { }

  public login(data):Observable<any>{
    return this.httpClient.post(`${this.url}/api/v1/users/login`,data)
  }
  public registerUser(data):Observable<any>{
    return this.httpClient.post(`${this.url}/api/v1/users/signup`,data)
  }
}
