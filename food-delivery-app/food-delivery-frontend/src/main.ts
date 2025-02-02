import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './app/components/home/home.component';
import { RestaurantListComponent } from './app/components/restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './app/components/restaurant-details/restaurant-details.component';
import { CartComponent } from './app/components/cart/cart.component';
import { OrderNowComponent } from './app/components/order-now/order-now.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },  
      { path: 'restaurants', component: RestaurantListComponent },
      { path: 'restaurants/:id', component: RestaurantDetailsComponent },  // ✅ Restaurant details will show dishes
      { path: 'cart', component: CartComponent },
      { path: 'order-now', component: OrderNowComponent }
    ]),
    provideHttpClient()
  ],
}).catch(err => console.error(err));
