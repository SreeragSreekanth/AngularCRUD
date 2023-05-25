import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LapserviceService {
  private apiUrl = 'http://localhost:5555/laptops';
  constructor(private http:HttpClient) { }

  getLap(){
    return this.http.get<any>('http://localhost:5555/laptops')
  }

  createLaptop(laptopData: any): Observable<any> {
    return this.http.post(this.apiUrl, laptopData);
  }

  deleteLap(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  getLaptopById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  updateLaptop(id: number, laptopData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, laptopData);
  }
}
