import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant.model';
import { Dish } from '../models/dish.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private baseUrl = 'http://localhost:8080/api/restaurants';

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.baseUrl);
  }

  getRestaurantById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.baseUrl}/${id}`);
  }

  getDishesByRestaurant(id: number): Observable<Dish[]> {
    console.log(`🔍 Fetching dishes from: ${this.baseUrl}/${id}/dishes`);
    return this.http.get<Dish[]>(`${this.baseUrl}/${id}/dishes`);
  }
}
