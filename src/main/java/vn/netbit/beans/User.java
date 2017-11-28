/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.beans;

import java.io.Serializable;
import java.util.List;

/**
 *
 * @author truongnq
 */
public class User implements Serializable{
    private int id;
    private String userName;
    private String passWord;
    private List<String> roles;

    @Override
    public String toString() {
        return "User{" + "id=" + id + ", userName=" + userName + ", passWord=" + passWord + ", roles=" + roles + '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}
