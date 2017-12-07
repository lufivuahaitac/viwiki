/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.daos;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.Types;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import vn.netbit.beans.Taxonomy;
import vn.netbit.config.DatabaseConfig;
import vn.netbit.utils.ConnectionManager;
import vn.netbit.utils.DBUtils;

/**
 *
 * @author truongnq
 */
public class CmsDao {
    private static final Logger LOGGER = LogManager.getLogger(CmsDao.class);
    
    private static final class SingletonHolder {
        
        private static final CmsDao instance = new CmsDao();
    }
    
    public static CmsDao getInstance() {
        return SingletonHolder.instance;
    }
    
    
    /**
     * Tao tk
     * @param requestBean
     * @return 
     */
    public int createTaxonomy(Taxonomy requestBean) {
        Connection con = null;
        CallableStatement st = null;

        try {
            con = ConnectionManager.getInstance().getConnection();
            if (con == null) {
                LOGGER.info("Get Connect to Database createTaxonomy...failed");
                return -1;
            }
            String sql = "{call " + DatabaseConfig.insertTaxonomy() + " (?,?,?,?)}";
            st = con.prepareCall(sql);
            st.setString("URL", requestBean.getTaxonomyUrl());
            st.setString("TYPE", requestBean.getTaxonomyType());
            st.setString("NAME", requestBean.getTaxonomyName());
            st.registerOutParameter("ID", Types.INTEGER);
            st.execute();
            int result = st.getInt("ID");
            LOGGER.info("createTaxonomy... result: {}", result);
            return result;
        } catch (Exception ex) {
            LOGGER.error("createTaxonomy...failed. Error: {}", ex);
            return -1;
        } finally {
            DBUtils.closeQuietly(st, con);
        }
    }
}
