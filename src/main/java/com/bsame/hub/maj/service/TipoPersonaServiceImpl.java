
package com.bsame.hub.maj.service;

import com.bsame.hub.maj.entity.TipoPersona;
import com.bsame.hub.maj.repository.TipoPersonaRepository;

import com.bsame.hub.maj.repository.base.BaseRepository;
import com.bsame.hub.maj.service.base.BaseService;
import com.bsame.hub.maj.service.base.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TipoPersonaServiceImpl extends BaseServiceImpl<TipoPersona, Long> implements TipoPersonaService {
    @Autowired
    private TipoPersonaRepository tipopersonaRepository;

    public TipoPersonaServiceImpl(BaseRepository<TipoPersona, Long> baseRepository) {
        super(baseRepository);
    }
}
