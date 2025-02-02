# Use OpenJDK to run the Spring Boot app
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy the correct JAR file into the container
COPY target/food-delivery-0.0.1-SNAPSHOT.jar app.jar

# Expose the application's port
EXPOSE 8080

# Run the Spring Boot app
CMD ["java", "-jar", "app.jar"]
