/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.controller;

/**
 *
 * @author truongnq
 */
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import vn.netbit.beans.User;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired 
    private PasswordEncoder passwordEncoder;
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = new User();
        user.setPassWord(passwordEncoder.encode("12345a"));
        user.setUserName(username);
        List<String> roles = new ArrayList<String>();
        if(username.equals("admin")){
            roles.add("ADMIN");
        } 
        roles.add("MEMBER");
        
        
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }

        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        //Set<Role> roles = user.getRoles();
        for (String role : roles) {
            grantedAuthorities.add(new SimpleGrantedAuthority(role));
        }

        return new org.springframework.security.core.userdetails.User(
                user.getUserName(), user.getPassWord(), grantedAuthorities);
    }


}