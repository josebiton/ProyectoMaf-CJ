
package com.bsame.hub.maj.service;

import com.bsame.hub.maj.entity.Programa;
import com.bsame.hub.maj.repository.ProgramaRepository;
import com.bsame.hub.maj.repository.base.BaseRepository;

import com.bsame.hub.maj.service.base.BaseService;
import com.bsame.hub.maj.service.base.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProgramaServiceImpl extends BaseServiceImpl<Programa, Long> implements ProgramaService {

    @Autowired
    private ProgramaRepository programaRepository;

    public ProgramaServiceImpl(BaseRepository<Programa, Long> baseRepository) {
        super(baseRepository);
    }
}
