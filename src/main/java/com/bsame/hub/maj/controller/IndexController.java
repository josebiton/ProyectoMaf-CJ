
package com.bsame.hub.maj.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("titulo", "Bienvenido a Thymeleaf");
        return "web.index";
    }
    @GetMapping("/login")
    public String indexAutor(Model model) {
        model.addAttribute("mensaje", "Logueo");
        return "login/login";

}
}
