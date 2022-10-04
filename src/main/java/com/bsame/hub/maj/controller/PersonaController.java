
package com.bsame.hub.maj.controller;

import com.bsame.hub.maj.controller.base.BaseControllerImpl;
import com.bsame.hub.maj.entity.Persona;
import com.bsame.hub.maj.service.PersonaServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/personas")
public class PersonaController extends BaseControllerImpl<Persona, PersonaServiceImpl> {

    @GetMapping("/search")
    public ResponseEntity<?> search(@RequestParam String filter){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(service.searchByDniOrCode(filter));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\": \"Error, intentelo más tarde, codigo: " + e.getMessage() +" \"}");
        }
    }
}
