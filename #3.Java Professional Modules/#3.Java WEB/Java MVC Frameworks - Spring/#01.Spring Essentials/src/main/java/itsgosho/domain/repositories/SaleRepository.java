package itsgosho.domain.repositories;

import itsgosho.domain.entities.Car;
import itsgosho.domain.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SaleRepository extends JpaRepository<Sale,Integer> {
}
