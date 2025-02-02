import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Needed for *ngFor
import { RouterModule } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service'; // ✅ Import only the service
import { Restaurant } from '../../models/restaurant.model';  // ✅ Correct relative path


@Component({
  selector: 'app-home',
  standalone: true,  // ✅ Keep standalone
  imports: [CommonModule, RouterModule],  // ✅ Required for *ngFor and routing
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(
      (data) => {
        this.restaurants = data;
      },
      (error) => {
        console.error('Error fetching restaurants:', error);
      }
    );
  }
}
