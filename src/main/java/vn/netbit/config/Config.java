/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.config;

import org.apache.commons.configuration.ConfigurationException;
import org.apache.commons.configuration.PropertiesConfiguration;
import org.apache.commons.configuration.reloading.FileChangedReloadingStrategy;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 *
 * @author YTB
 */
public class Config implements Runnable {

    private static Logger logger = LogManager.getLogger(Config.class);
    private static final long serialVersionUID = 1L;
    private static PropertiesConfiguration databaseConfig;
    

    /**
     * initConfig
     */
    public static void init() {

        try {

            String databseConfigPath = "./config/DatabaseConfig.properties";
            databaseConfig = new PropertiesConfiguration(databseConfigPath);
            databaseConfig.setReloadingStrategy(new FileChangedReloadingStrategy());

            
        } catch (ConfigurationException e) {
            logger.error("Load file config failed ex: {}.", e);
        }
    }
    /**
     *
     * @return
     */
    public static PropertiesConfiguration getDatabaseConfig() {
        return databaseConfig;
    } 


    @Override
    public void run() {
        init();
    }

}
