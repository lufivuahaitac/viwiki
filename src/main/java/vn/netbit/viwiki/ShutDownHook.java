/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.viwiki;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import vn.netbit.utils.ConnectionManager;

/**
 *
 * @author ytb
 */
public class ShutDownHook extends Thread {

    private static final Logger LOGGER = LogManager.getLogger(ShutDownHook.class);

    @Override
    public void run() {
        try {
            ConnectionManager.getInstance().destroy();
            LOGGER.info("ConnectionManager destroy Success");

        } catch (Exception ex) {
            LOGGER.error("ShutDownHook have ex: {}.", ex);
        }
    }

}
