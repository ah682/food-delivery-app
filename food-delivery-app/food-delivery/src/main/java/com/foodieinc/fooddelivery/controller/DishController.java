package com.foodieinc.fooddelivery.controller;

import com.foodieinc.fooddelivery.model.Dish;
import com.foodieinc.fooddelivery.repository.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dishes")
@CrossOrigin("*")
public class DishController {
    @Autowired
    private DishRepository dishRepository;

    // ✅ Fetch all dishes OR filter by restaurantId
    @GetMapping
    public List<Dish> getDishes(@RequestParam(required = false) Long restaurantId) {
        if (restaurantId != null) {
            return dishRepository.findByRestaurantId(restaurantId); // ✅ Fetch only dishes for a specific restaurant
        }
        return dishRepository.findAll();
    }

    // ✅ Add a new dish
    @PostMapping
    public Dish addDish(@RequestBody Dish dish) {
        return dishRepository.save(dish);
    }
}
