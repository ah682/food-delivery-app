package com.foodieinc.fooddelivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.foodieinc.fooddelivery.model.Dish;
import java.util.List;

public interface DishRepository extends JpaRepository<Dish, Long> {
    List<Dish> findByRestaurantId(Long restaurantId); // ✅ Custom query method
}
