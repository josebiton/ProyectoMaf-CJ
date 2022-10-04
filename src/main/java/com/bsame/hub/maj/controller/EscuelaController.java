
package com.bsame.hub.maj.controller;

import com.bsame.hub.maj.controller.base.BaseControllerImpl;
import com.bsame.hub.maj.entity.Escuela;
import com.bsame.hub.maj.service.EscuelaServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/escuelas")
public class EscuelaController extends BaseControllerImpl<Escuela, EscuelaServiceImpl> {

}
