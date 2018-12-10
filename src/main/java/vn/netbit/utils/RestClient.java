package vn.netbit.utils;

/**
 * truongnq
 */

import java.util.concurrent.TimeUnit;
import okhttp3.ConnectionPool;
import org.apache.logging.log4j.Logger;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import vn.netbit.beans.BaseObject;
import vn.netbit.contant.Constant;
import org.apache.logging.log4j.LogManager;
import vn.netbit.contant.*;

public class RestClient {

    private static final Logger LOGGER = LogManager.getLogger(RestClient.class);
    private static final ConnectionPool POOL = new ConnectionPool(30, 10000, TimeUnit.MILLISECONDS);

    private static final OkHttpClient CLIENT = new OkHttpClient.Builder()
                              .connectionPool(POOL)
                              .build();

    private static final class SingletonHolder {

        private static final RestClient INSTANCE = new RestClient();
    }

    public static RestClient getInstance() {
        return SingletonHolder.INSTANCE;
    }

    private RestClient() {

    }

    /**
     * 
     * @param data
     * @param resource
     * @param type
     * @return
     */
    public static BaseObject postData(final String data, final String resource) {
        BaseObject res;
        try {
            RequestBody body = RequestBody.create(Constant.JSON, data);
            Request request = new Request.Builder().url(resource).post(body).build();
            Response response = CLIENT.newCall(request).execute();
            if (response.code() != 200) {
                res = BaseObject.builder().code(Constant.FAIL_CODE).build();
                return res;
            }
            res = BaseObject.builder().code(Constant.SUCCESS_CODE).message(response.body().string()).build();
            return res;
        } catch (Exception e) {
            LOGGER.error("Post data failed by ex: {}.", e);
            res = BaseObject.builder().code(Constant.ERROR_CODE).build();
            return res;
        }
    }

    /**
     * 
     * @param data
     * @param resource
     * @param type
     * @return
     */
    public static BaseObject getData(final String resource) {
        BaseObject res;
        try {
            Request request = new Request.Builder().url(resource).build();
            Response response = CLIENT.newCall(request).execute();
            if (response.code() != 200) {
                res = BaseObject.builder().code(Constant.FAIL_CODE).build();
                return res;
            }
            res = BaseObject.builder().code(Constant.SUCCESS_CODE).message(response.body().string()).build();
            return res;
        } catch (Exception e) {
            LOGGER.error("Post data failed by ex: {}.", e);
            res = BaseObject.builder().code(Constant.ERROR_CODE).build();
            return res;
        }
    }

}
