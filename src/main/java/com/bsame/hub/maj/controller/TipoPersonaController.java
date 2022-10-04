
package com.bsame.hub.maj.controller;


import com.bsame.hub.maj.controller.base.BaseControllerImpl;
import com.bsame.hub.maj.entity.TipoPersona;
import com.bsame.hub.maj.service.TipoPersonaServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/tipo_personas")
public class TipoPersonaController extends BaseControllerImpl<TipoPersona, TipoPersonaServiceImpl> {

}
