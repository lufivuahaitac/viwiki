/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.beans;

/**
 *
 * @author truongnq
 */
public class NotifyObject {
    private String id;
    private String room;
    private String content;
    private String createUser;

    @Override
    public String toString() {
        return "NotifyObject{" + "id=" + id + ", room=" + room + ", content=" + content + ", createUser=" + createUser + '}';
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRoom() {
        return room;
    }

    public void setRoom(String room) {
        this.room = room;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser;
    }

   
}
