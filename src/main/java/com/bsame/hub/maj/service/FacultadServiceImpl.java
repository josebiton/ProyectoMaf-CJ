
package com.bsame.hub.maj.service;

import com.bsame.hub.maj.entity.Asistencia;
import com.bsame.hub.maj.entity.Facultad;
import com.bsame.hub.maj.repository.FacultadRepository;
import com.bsame.hub.maj.repository.base.BaseRepository;
import com.bsame.hub.maj.service.base.BaseService;
import com.bsame.hub.maj.service.base.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FacultadServiceImpl extends BaseServiceImpl<Facultad, Long>  implements FacultadService {
    @Autowired
    protected FacultadRepository facultadRepository;

    public FacultadServiceImpl(BaseRepository<Facultad, Long> baseRepository) {
        super(baseRepository);
    }
}