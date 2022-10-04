
package com.bsame.hub.maj.service;

import com.bsame.hub.maj.entity.Persona;
import com.bsame.hub.maj.service.base.BaseService;

import java.util.List;

public interface PersonaService extends BaseService<Persona, Long> {

    List<Persona> searchByDniOrCode(String filter) throws Exception;
}
