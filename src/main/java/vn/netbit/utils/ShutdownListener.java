/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.utils;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextClosedEvent;

/**
 *
 * @author truongnq
 */
public class ShutdownListener implements ApplicationListener<ContextClosedEvent> {
    private static Logger logger = LogManager.getLogger(ShutdownListener.class);
    @Override
    public void onApplicationEvent(ContextClosedEvent event) {
        
        ConnectionManager.getInstance().destroy();
        logger.info("ConnectionManager destroy Success");
    }
}
