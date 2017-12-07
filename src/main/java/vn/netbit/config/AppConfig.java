/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.config;

/**
 *
 * @author truongnq
 */
public class AppConfig {
    
    public static long timeReloadCache() {
        return Config.getAppConfig().getLong("RELOAD_CACHE", 10000);
    }

    public static String UserName() {
        return Config.getDatabaseConfig().getString("UserName", "");
    }

    public static String Password() {
        return Config.getDatabaseConfig().getString("Password", "");
    }

    public static int connection_timeout() {
        return Config.getDatabaseConfig().getInt("connection_timeout", 60);
    }
}
