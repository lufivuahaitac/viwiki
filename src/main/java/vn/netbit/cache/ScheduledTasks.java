/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.cache;

/**
 *
 * @author truongnq
 */
import java.text.SimpleDateFormat;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import vn.netbit.daos.CacheDao;

@Component
public class ScheduledTasks {

    private static final Logger LOGGER = LogManager.getLogger(ScheduledTasks.class);

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
    
    @Scheduled(fixedDelay = 10000)
    public void reportCurrentTime() {
        //CacheManager.getInstance().setTaxonomyList(CacheDao.getInstance().getTaxonomy());
    }
}