import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant.model';
import { Dish } from '../../models/dish.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [CommonModule],  // ✅ Required for *ngFor
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  restaurant!: Restaurant;
  dishes: Dish[] = [];

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(`🔍 Fetching details for restaurant ID: ${id}`);

    if (id) {
      // ✅ Fetch restaurant details
      this.restaurantService.getRestaurantById(+id).subscribe({
        next: (data: Restaurant) => {
          this.restaurant = data;
          console.log('✅ Restaurant data:', data);
        },
        error: (err) => {
          console.error('❌ Error fetching restaurant:', err);
        }
      });

      // ✅ Fetch dishes for this restaurant
      this.restaurantService.getDishesByRestaurant(+id).subscribe({
        next: (data: Dish[]) => {
          this.dishes = data;
          console.log('✅ Dishes data:', data);
        },
        error: (err) => {
          console.error('❌ Error fetching dishes:', err);
        }
      });
    }
  }

  addToCart(dish: Dish): void {
    console.log(`🛒 Adding to cart:`, dish);
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingItem = cart.find((item: Dish) => item.id === dish.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...dish, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('🛒 Cart updated:', cart);
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }
}
