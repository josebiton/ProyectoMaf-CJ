
package com.bsame.hub.maj.service;

import com.bsame.hub.maj.entity.Asistencia;
import com.bsame.hub.maj.entity.Escuela;
import com.bsame.hub.maj.repository.EscuelaRepository;
import com.bsame.hub.maj.repository.base.BaseRepository;
import com.bsame.hub.maj.service.base.BaseService;
import com.bsame.hub.maj.service.base.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EscuelaServiceImpl extends BaseServiceImpl<Escuela, Long>  implements EscuelaService {

    @Autowired
    protected EscuelaRepository escuelaRepository;

    public EscuelaServiceImpl(BaseRepository<Escuela, Long> baseRepository) {
        super(baseRepository);
    }
}
