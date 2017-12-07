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
public class Taxonomy {
    private int id;
    private String taxonomyUrl;
    private String taxonomyType;
    private String taxonomyName;
    private int count;

    @Override
    public String toString() {
        return "Taxonomy{" + "id=" + id + ", taxonomyUrl=" + taxonomyUrl + ", taxonomyType=" + taxonomyType + ", taxonomyName=" + taxonomyName + ", count=" + count + '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTaxonomyUrl() {
        return taxonomyUrl;
    }

    public void setTaxonomyUrl(String taxonomyUrl) {
        this.taxonomyUrl = taxonomyUrl;
    }

    public String getTaxonomyType() {
        return taxonomyType;
    }

    public void setTaxonomyType(String taxonomyType) {
        this.taxonomyType = taxonomyType;
    }

    public String getTaxonomyName() {
        return taxonomyName;
    }

    public void setTaxonomyName(String taxonomyName) {
        this.taxonomyName = taxonomyName;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
    
}
