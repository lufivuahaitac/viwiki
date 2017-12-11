/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.beans;

import com.fasterxml.jackson.annotation.JsonInclude;
import java.util.Arrays;

/**
 *
 * @author truongnq
 */
public class Post {
    private int userId;
    private String url;
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private String title;
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private String content;
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private int category;
    private int[] tags;

    @Override
    public String toString() {
        return "Post{" + "userId=" + userId + ", url=" + url + ", title=" + title + ", content=" + content + ", category=" + category + ", tags=" + Arrays.toString(tags) + '}';
    }
    
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getCategory() {
        return category;
    }

    public void setCategory(int category) {
        this.category = category;
    }

    public int[] getTags() {
        return tags;
    }

    public void setTags(int[] tags) {
        this.tags = tags;
    }
    
}
