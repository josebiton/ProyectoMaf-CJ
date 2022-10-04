/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bsame.hub.maj.controller;

import com.bsame.hub.maj.controller.base.BaseControllerImpl;
import com.bsame.hub.maj.entity.Taller;
import com.bsame.hub.maj.service.TallerServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/talleres")
public class TallerController extends BaseControllerImpl<Taller, TallerServiceImpl> {

    @GetMapping("/actuales")
    public ResponseEntity<?> talleresActuales(){
        try {
            LocalDate now = LocalDate.now();
            return ResponseEntity.status(HttpStatus.OK).body(service.talleresActuales());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\": \"Error, intentelo más tarde, codigo: " + e.getMessage() +" \"}");
        }
    }
}