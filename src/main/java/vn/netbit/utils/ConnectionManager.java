/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.utils;

import com.zaxxer.hikari.HikariDataSource;
import java.sql.Connection;
import java.sql.SQLException;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import vn.netbit.config.DatabaseConfig;

/**
 *
 * @author truongnq
 */
public class ConnectionManager {
    private static Logger logger = LogManager.getLogger(ConnectionManager.class);
    
    private static HikariDataSource ds;
    private ConnectionManager() {
        ds = new HikariDataSource();
        ds.setDriverClassName("com.mysql.jdbc.Driver");
        ds.setJdbcUrl(DatabaseConfig.URL());
        ds.setUsername(DatabaseConfig.UserName());
        ds.setPassword(DatabaseConfig.Password());
        ds.setMinimumIdle(DatabaseConfig.MinPoolSize());
        ds.setMaximumPoolSize(DatabaseConfig.MaxPoolSize());
        ds.setConnectionTimeout(DatabaseConfig.connection_timeout());
    }

    private static final class SingletonHolder {

        private static final ConnectionManager INSTANCE = new ConnectionManager();
    }

    public static ConnectionManager getInstance() {
        return SingletonHolder.INSTANCE;
    }
   
    public Connection getConnection(){
        try {
            return ds.getConnection();
        } catch (SQLException ex) {
            logger.error("Get connection Error: {}", ex);
            return null;
        }
    }
    
    public void destroy(){
        ds.close();
    } 
}
