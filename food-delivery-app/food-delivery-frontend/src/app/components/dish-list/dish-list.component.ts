import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Needed for *ngIf and *ngFor
import { DishService, Dish } from '../../services/dish.service';

@Component({
  selector: 'app-dish-list',
  standalone: true,  // ✅ Make standalone
  imports: [CommonModule],  // ✅ Import CommonModule
  templateUrl: './dish-list.component.html',
})
export class DishListComponent implements OnInit {
  dishes: Dish[] = [];

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.dishService.getDishes().subscribe(
      (data) => {
        this.dishes = data;
      },
      (error) => {
        console.error('Error fetching dishes:', error);
      }
    );
  }
}
