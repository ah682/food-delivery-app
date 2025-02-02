import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Dish {
  id: number;
  name: string;
  price: number;
  restaurantId: number;
}

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private baseUrl = `${environment.apiUrl}/restaurants`;

  constructor(private http: HttpClient) {}

  // ✅ Fetch all dishes (only if needed)
  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${this.baseUrl}/dishes`);
  }

  // ✅ Fetch dishes for a specific restaurant (Corrected API call)
  getDishesByRestaurant(restaurantId: number): Observable<Dish[]> {
    console.log(`🔍 Fetching dishes from: ${this.baseUrl}/${restaurantId}/dishes`);
    return this.http.get<Dish[]>(`${this.baseUrl}/${restaurantId}/dishes`);
  }
}
