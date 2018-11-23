/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.security;

/**
 *
 * @author truongnq
 */
import java.util.HashSet;
import java.util.Set;
import org.springframework.security.authentication.BadCredentialsException;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import vn.netbit.beans.User;
import vn.netbit.beans.UserLogged;
import vn.netbit.daos.AccountDao;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

//    @Autowired 
//    private PasswordEncoder passwordEncoder;
    
    @Override
    public UserDetails loadUserByUsername(String username) throws BadCredentialsException {
        User user = AccountDao.getInstance().getUser(username);
       
        if (user == null) {
            throw new BadCredentialsException("Người dùng không tồn tại");
        }
        
        user.setRoles(AccountDao.getInstance().getRoles(user.getId()));
        
        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        
        for (String role : user.getRoles()) {
            grantedAuthorities.add(new SimpleGrantedAuthority(role));
        }

        UserLogged u = new UserLogged(user.getUserName(), user.getPassWord(), grantedAuthorities);
        u.setId(user.getId());
        u.setName(user.getEmail());
        
        return u;
    }

    

}