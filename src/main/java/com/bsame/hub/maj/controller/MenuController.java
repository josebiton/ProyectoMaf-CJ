package com.bsame.hub.maj.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/menu")
public class MenuController {
 
    
    @GetMapping("/persona")
    public String indexAutor(Model model) {
        model.addAttribute("mensaje", "Personas");
        return "personas/persona";
    }

    @GetMapping("/facultad")
    public String indexFacultad(Model model) {
        model.addAttribute("mensaje", "Facultad");
        return "facultad";
    }

    @GetMapping("/escuela")
    public String indexEscuela(Model model) {
        model.addAttribute("mensaje", "Escuela");
        return "escuela";
        
    }

    
   
}
