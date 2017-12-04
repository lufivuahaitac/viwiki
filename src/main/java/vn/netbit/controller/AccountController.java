/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.pegdown.PegDownProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.context.request.WebRequest;
import vn.netbit.beans.User;
import vn.netbit.daos.AccountDao;
import vn.netbit.utils.Utils;

/**
 *
 * @author truongnq
 */
@Controller
public class AccountController {

    private static Logger LOGGER = LogManager.getLogger(AccountController.class);
    private static PegDownProcessor processor = new PegDownProcessor();

    @Autowired 
    private PasswordEncoder passwordEncoder;
    
    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public String register(Model model) {
        try {
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            if (!(auth instanceof AnonymousAuthenticationToken)) {
                return "redirect:/";
            }
            model.addAttribute("user", new User());
        } catch (Exception e) {
            LOGGER.error("Register init Ex: {}",e);
        }
        
        return "register";
    }
    
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String register(Model model,
                           WebRequest request,
                           @ModelAttribute("user") User user) {
        try {
            model.addAttribute("user", user);
            
            String passWord = Utils.genRanDomPass();
            user.setPassWord(passwordEncoder.encode(passWord));
            String res = AccountDao.getInstance().insertUser(user);
            if("00".equals(res)){
                return "register_success";
            }
            if("01".equals(res)){
                model.addAttribute("msg", "Email đã được sử dụng. Sử dụng quên mật khẩu nếu bạn sở hữu Email này");
                return "register";
            }
            
            model.addAttribute("msg", "Đăng ký không thành công");
            return "register";
        } catch (Exception e) {
            LOGGER.error("Register process Ex: {}",e);
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
