package com.bsame.hub.maj.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class AdminController {

    @GetMapping("/menu")
    public String home(Model model) {
        model.addAttribute("titulo", "Bienvenido a Thymeleaf");
        return "index";
    }

    @GetMapping("/taller")
    public String indexTaller(Model model) {
        model.addAttribute("mensaje", "Talleres");
        return "talleres/Talleres";
    }
    @GetMapping("/taller/programa")
    public String indexPrograma(Model model) {
        model.addAttribute("mensaje", "Talleres");
        return "talleres/Programas";
    }

      @GetMapping("/escuela")
    public String indexEscuela(Model model) {
        model.addAttribute("mensaje", "Escuelas");
        return "facultades/Facultades";
    }
     @GetMapping("/persona")
    public String indexPersona(Model model) {
        model.addAttribute("mensaje", "Personas");
        return "personas/Personas";
    }
      @GetMapping("/personas/tipoper")
    public String indexTipoper(Model model) {
        model.addAttribute("mensaje", "TiPer");
        return "personas/TipoPersonas";
    }

     @GetMapping("/asistencia")
    public String indexAsistencia(Model model) {
        model.addAttribute("mensaje", "Asistencia");
        return "asistencias/Asistencia";
    }

     @GetMapping("/reporte")
    public String indexReporteAsistencia(Model model) {
        model.addAttribute("mensaje", "Asistencia");
        return "reportes/ReporteAsistencias";
    }
     @GetMapping("/reporte/respuestas")
    public String indexReporteRespuesta(Model model) {
        model.addAttribute("mensaje", "Respuestas");
        return "reportes/Respuestas";
    }
}
