
package com.bsame.hub.maj.repository;

import com.bsame.hub.maj.entity.Asistencia;
import com.bsame.hub.maj.repository.base.BaseRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface AsistenciaRepository extends BaseRepository<Asistencia, Long> {

    @Query("SELECT a FROM Asistencia a WHERE a.fecha = :fecha AND a.taller.id = :id_taller")
    List<Asistencia> reporte(LocalDate fecha, Long id_taller);
    
    @Query("SELECT a FROM Asistencia a WHERE a.fecha = :fecha AND a.taller.id = :id_taller AND a.persona.tipo_persona.id = :id_tipo_persona")
    List<Asistencia> reporteGeneral(LocalDate fecha, Long id_taller, Long id_tipo_persona);

}
