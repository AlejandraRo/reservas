import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservasAdminService {
  private URL='http://localhost:3000/api'

  constructor(private http:HttpClient) { }

  getReservas(){
    return this.http.get<any>(this.URL+'/reservas');
  }

}
