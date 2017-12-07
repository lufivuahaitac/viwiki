/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.cache;

import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import vn.netbit.beans.Taxonomy;

/**
 *
 * @author truongnq
 */
public class CacheManager {
    private static final Logger LOGGER = LogManager.getLogger(CacheManager.class);
    
    private static final class SingletonHolder {
        
        private static final CacheManager instance = new CacheManager();
    }
    
    public static CacheManager getInstance() {
        return SingletonHolder.instance;
    }
    private List<Taxonomy> taxonomyList;

    public List<Taxonomy> getTaxonomyList() {
        return taxonomyList;
    }

    public void setTaxonomyList(List<Taxonomy> taxonomyList) {
        this.taxonomyList = taxonomyList;
    }
    
    
    
}
