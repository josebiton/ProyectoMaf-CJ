
package com.bsame.hub.maj.repository;

import com.bsame.hub.maj.entity.Taller;
import com.bsame.hub.maj.repository.base.BaseRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TallerRepository extends BaseRepository<Taller, Long> {

    @Query("SELECT t FROM Taller t WHERE t.fecha >= CURDATE()")
    List<Taller> talleresActuales();
}
