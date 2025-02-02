package com.foodieinc.fooddelivery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.foodieinc.fooddelivery.model.Restaurant;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
}
