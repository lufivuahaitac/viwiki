/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.config;

/**
 *
 * @author Tran Ba Y
 */
public class DatabaseConfig {


    public static String URL() {
        return Config.getDatabaseConfig().getString("URL", "");
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

    public static int InitPoolSize() {
        return Config.getDatabaseConfig().getInt("InitPoolSize", 8);
    }

    public static int MinPoolSize() {
        return Config.getDatabaseConfig().getInt("MinPoolSize", 5);
    }

    public static int MaxPoolSize() {
        return Config.getDatabaseConfig().getInt("MaxPoolSize", 40);
    }

    public static String insertUser() {
        return Config.getDatabaseConfig().getString("INSERT_USER", "");
    }

    public static String getUser() {
        return Config.getDatabaseConfig().getString("GET_USER", "");
    }

    public static String getRoles() {
        return Config.getDatabaseConfig().getString("GET_ROLES", "");
    }

    public static String getTaxonomy() {
        return Config.getDatabaseConfig().getString("GET_TAXONOMY", "");
    }

    public static String insertTaxonomy() {
        return Config.getDatabaseConfig().getString("INSERT_TAXONOMY", "");
    }

}
