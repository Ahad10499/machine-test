import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { IUser } from '../user';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  ServerUrl=`${environment.apiUrl}/users`;
  constructor(private http: HttpClient) { }

  getUsers() : Observable<IUser[]>{
    return this.http.get<IUser[]>(this.ServerUrl);
  }
  registerUser(value :IUser) {
    return this.http.post<IUser[]>(`${this.ServerUrl}`, value);
  }
 
}
