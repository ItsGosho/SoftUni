package com.masdefect.repository;

import com.masdefect.domain.entities.SolarSystem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SolarSystemRepository extends JpaRepository<SolarSystem,Integer> {

    SolarSystem findSolarSystemByName(String name);
}
