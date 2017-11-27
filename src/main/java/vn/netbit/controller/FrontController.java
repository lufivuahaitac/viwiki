/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import vn.netbit.utils.ConnectionManager;

/**
 *
 * @author lufiv
 */
@Controller
public class FrontController {
    private static Logger logger = LogManager.getLogger(FrontController.class);
    
    @RequestMapping("/")
    public String index(Model model) {
        logger.info("Start index");
        ConnectionManager.getInstance().getConnection();
        model.addAttribute("name", "test");
        return "index";
    }
    
    @RequestMapping("/topic")
    public String topic(Model model) {
        //model.addAttribute("name", "test");
        return "topic";
    }
}
