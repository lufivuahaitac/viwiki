/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.nuoiday;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 *
 * @author ytb
 */
public class ShutDownHook extends Thread {

    private static final Logger LOGGER = LogManager.getLogger(ShutDownHook.class);

    @Override
    public void run() {
        try {
            LOGGER.info("Shutdown hook sucecss");
            System.out.println("Shutdown hook sucecss");
        } catch (Exception ex) {
            LOGGER.error("ShutDownHook have ex: {}.", ex);
        }
    }

}
