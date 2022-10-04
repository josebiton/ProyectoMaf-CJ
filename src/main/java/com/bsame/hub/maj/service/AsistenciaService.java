
package com.bsame.hub.maj.service;

import com.bsame.hub.maj.entity.Asistencia;
import com.bsame.hub.maj.service.base.BaseService;

import java.time.LocalDate;
import java.util.List;

public interface AsistenciaService extends BaseService<Asistencia, Long> {

    List<Asistencia> reporte(LocalDate fecha, Long id_taller) throws Exception;
    List<Asistencia> reporteGeneral(LocalDate fecha, Long id_taller, Long id_tipo_persona) throws Exception;
}
