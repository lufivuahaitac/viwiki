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
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import vn.netbit.beans.Taxonomy;
import vn.netbit.beans.User;
import vn.netbit.config.DatabaseConfig;
import vn.netbit.utils.ConnectionManager;
import vn.netbit.utils.DBUtils;

/**
 *
 * @author truongnq
 */
public class CacheDao {
    private static final Logger LOGGER = LogManager.getLogger(AccountDao.class);
    
    private static final class SingletonHolder {
        
        private static final CacheDao instance = new CacheDao();
    }
    
    public static CacheDao getInstance() {
        return SingletonHolder.instance;
    }
    

    /**
     * Lấy danh sách taxonomy
     * @return List<Taxonomy>
     */
    public List<Taxonomy> getTaxonomy() {
        Connection con = null;
        CallableStatement st = null;
        ResultSet rs = null;

        try {
            con = ConnectionManager.getInstance().getConnection();
            if (con == null) {
                LOGGER.info("Get Connect to Database insertUser...failed");
                return Collections.EMPTY_LIST;
            }
            String sql = "{call " + DatabaseConfig.getTaxonomy() + " ()}";
            st = con.prepareCall(sql);
            rs = st.executeQuery();
            List<Taxonomy> taxonomyList = new ArrayList<>();
            while (rs.next()){
                Taxonomy taxonomy = new Taxonomy();
                taxonomy.setId(rs.getInt("ID"));
                taxonomy.setTaxonomyUrl(rs.getString("TAXONOMY_URL"));
                taxonomy.setTaxonomyName(rs.getString("TAXONOMY_NAME"));
                taxonomy.setTaxonomyType(rs.getString("TAXONOMY_TYPE"));
                taxonomy.setCount(rs.getInt("COUNT"));
                taxonomyList.add(taxonomy);
            }
            return taxonomyList;
        } catch (Exception ex) {
            LOGGER.error("insertUser...failed. Error: {}", ex);
            return Collections.EMPTY_LIST;
        } finally {
            DBUtils.closeQuietly(rs, st, con);
        }
    }
}
