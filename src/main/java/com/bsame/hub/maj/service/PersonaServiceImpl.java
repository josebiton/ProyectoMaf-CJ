
package com.bsame.hub.maj.service;

import com.bsame.hub.maj.entity.Persona;
import com.bsame.hub.maj.repository.PersonaRepository;

import com.bsame.hub.maj.repository.base.BaseRepository;
import com.bsame.hub.maj.service.base.BaseService;
import com.bsame.hub.maj.service.base.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaServiceImpl extends BaseServiceImpl<Persona, Long> implements PersonaService {

    @Autowired
    private PersonaRepository personaRepository;

    public PersonaServiceImpl(BaseRepository<Persona, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    public List<Persona> searchByDniOrCode(String filter) throws Exception {
        try {
            List<Persona> list = personaRepository.searchByDniOrCode(filter);
            return list;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

}