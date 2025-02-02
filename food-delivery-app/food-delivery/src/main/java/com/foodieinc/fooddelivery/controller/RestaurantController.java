package com.foodieinc.fooddelivery.controller;

import com.foodieinc.fooddelivery.model.Restaurant;
import com.foodieinc.fooddelivery.model.Dish;
import com.foodieinc.fooddelivery.repository.RestaurantRepository;
import com.foodieinc.fooddelivery.repository.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/restaurants")
@CrossOrigin("*")
public class RestaurantController {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private DishRepository dishRepository; // ✅ Inject DishRepository

    @GetMapping
    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAll();
    }

    @PostMapping
    public Restaurant addRestaurant(@RequestBody Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    // ✅ NEW: Get dishes by restaurant ID
    @GetMapping("/{id}/dishes")
    public ResponseEntity<List<Dish>> getDishesByRestaurant(@PathVariable Long id) {
        Optional<Restaurant> restaurant = restaurantRepository.findById(id);

        if (restaurant.isPresent()) {
            List<Dish> dishes = dishRepository.findByRestaurantId(id);
            return ResponseEntity.ok(dishes);
        } else {
            return ResponseEntity.notFound().build(); // 404 if restaurant doesn't exist
        }
    }
}
