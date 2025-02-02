import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Needed for *ngIf and *ngFor
import { RouterModule } from '@angular/router'; // ✅ Needed for [routerLink]
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant.model';


@Component({
  selector: 'app-restaurant-list',
  standalone: true,  // ✅ Make standalone
  imports: [CommonModule, RouterModule],  // ✅ Import CommonModule & RouterModule
  templateUrl: './restaurant-list.component.html',
})
export class RestaurantListComponent implements OnInit {
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
