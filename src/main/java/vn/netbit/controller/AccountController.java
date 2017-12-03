/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.context.request.WebRequest;
import vn.netbit.beans.User;

/**
 *
 * @author truongnq
 */
@Controller
public class AccountController {

    private static Logger logger = LogManager.getLogger(AccountController.class);

    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public String register(Model model) {
        model.addAttribute("user", new User());
        return "register";
    }
    
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String register(Model model,
                           WebRequest request,
                           @ModelAttribute("user") User user) {
        try {
            throw new Exception("a");
        } catch (Exception e) {
            model.addAttribute("msg", "Có lỗi trong quá trình đăng ký vui lòng thử lại");
            return "register";
        }
    }

    @RequestMapping("/login")
    public String login() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (!(auth instanceof AnonymousAuthenticationToken)) {
            return "redirect:/";
        }
        return "login";
    }

    @RequestMapping("/admin")
    public String admin() {
        return "topic";
    }
}
