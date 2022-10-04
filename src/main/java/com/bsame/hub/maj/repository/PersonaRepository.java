
package com.bsame.hub.maj.repository;

import com.bsame.hub.maj.entity.Persona;
import com.bsame.hub.maj.repository.base.BaseRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonaRepository extends BaseRepository<Persona, Long> {

    @Query(value = "SELECT p FROM Persona p WHERE p.dni LIKE %:filter%")
    List<Persona> searchByDniOrCode(@Param("filter") String filter);
}
