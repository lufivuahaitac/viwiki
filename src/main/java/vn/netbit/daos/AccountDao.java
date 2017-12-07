/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.daos;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Types;
import java.util.ArrayList;
import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import vn.netbit.beans.User;
import vn.netbit.config.DatabaseConfig;
import vn.netbit.utils.ConnectionManager;
import vn.netbit.utils.DBUtils;

/**
 *
 * @author truongnq
 */
public class AccountDao {
    private static final Logger LOGGER = LogManager.getLogger(AccountDao.class);
    
    private static final class SingletonHolder {
        
        private static final AccountDao instance = new AccountDao();
    }
    
    public static AccountDao getInstance() {
        return SingletonHolder.instance;
    }
    

    /**
     * Tao tk
     * @param requestBean
     * @return 
     */
    public String insertUser(User requestBean) {
        Connection con = null;
        CallableStatement st = null;

        try {
            con = ConnectionManager.getInstance().getConnection();
            if (con == null) {
                LOGGER.info("Get Connect to Database insertUser...failed");
                return "maintain";
            }
            String sql = "{call " + DatabaseConfig.insertUser() + " (?,?,?,?)}";
            st = con.prepareCall(sql);
            st.setString("USER_NAME", requestBean.getUserName());
            st.setString("PASS_WORD", requestBean.getPassWord());
            st.setString("EMAIL", requestBean.getEmail());
            st.registerOutParameter("CODE", Types.VARCHAR);
            st.execute();
            String result = st.getString("CODE");
            LOGGER.info("insertUser... result: {}", result);
            return result;
        } catch (Exception ex) {
            LOGGER.error("insertUser...failed. Error: {}", ex);
            return "99";
        } finally {
            DBUtils.closeQuietly(st, con);
        }
    }
    
    public User getUser(String userName) {
        Connection con = null;
        CallableStatement st = null;
        ResultSet rs = null;
        User user = null;
        try {
            con = ConnectionManager.getInstance().getConnection();
            if (con == null) {
                LOGGER.info("Get Connect to Database getUser...failed");
                return null;
            }
            String sql = "{call " + DatabaseConfig.getUser() + " (?)}";
            st = con.prepareCall(sql);
            st.setString("USER_NAME", userName);
            rs = st.executeQuery();
            if(rs.next()){
                user = new User();
                user.setId(rs.getInt("ID"));
                user.setUserName(rs.getString("USER_NAME"));
                user.setPassWord(rs.getString("USER_PASS"));
            }
            LOGGER.info("getUser... Success: {}");
        } catch (Exception ex) {
            LOGGER.error("getUser...failed. Error: {}", ex);
        } finally {
            DBUtils.closeQuietly(rs, st, con);
        }
        return user;
    }
    
    public List<String> getRoles(int userId) {
        Connection con = null;
        CallableStatement st = null;
        ResultSet rs = null;
        List<String> roles = null;
        try {
            con = ConnectionManager.getInstance().getConnection();
            if (con == null) {
                LOGGER.info("Get Connect to Database getRoles...failed");
                return null;
            }
            String sql = "{call " + DatabaseConfig.getRoles() + " (?)}";
            st = con.prepareCall(sql);
            st.setInt("USER_ID", userId);
            rs = st.executeQuery();
            roles = new ArrayList<>();
            while(rs.next()){
                roles.add(rs.getString("ROLE"));
            }
            LOGGER.info("getRoles... Success: {}");
        } catch (Exception ex) {
            LOGGER.error("getRoles...failed. Error: {}", ex);
        } finally {
            DBUtils.closeQuietly(rs, st, con);
        }
        return roles;
    }
}
