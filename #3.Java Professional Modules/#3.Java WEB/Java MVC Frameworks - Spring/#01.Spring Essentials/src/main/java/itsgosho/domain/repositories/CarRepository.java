package itsgosho.domain.repositories;

import itsgosho.domain.entities.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends JpaRepository<Car,Integer> {

    Car findCarById(Integer id);
}
