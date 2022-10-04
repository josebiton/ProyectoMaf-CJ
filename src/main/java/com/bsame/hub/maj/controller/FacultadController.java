
package com.bsame.hub.maj.controller;

import com.bsame.hub.maj.controller.base.BaseControllerImpl;
import com.bsame.hub.maj.entity.Facultad;
import com.bsame.hub.maj.service.FacultadServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/facultades")
public class FacultadController extends BaseControllerImpl<Facultad, FacultadServiceImpl> {

}
