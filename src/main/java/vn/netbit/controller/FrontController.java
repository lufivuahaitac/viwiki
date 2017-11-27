/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author lufiv
 */
@Controller
public class FrontController {

    @RequestMapping("/")
    public String greeting(Model model) {
        model.addAttribute("name", "test");
        return "index";
    }
}
