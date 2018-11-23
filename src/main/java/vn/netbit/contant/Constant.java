package vn.netbit.contant;

import com.google.gson.Gson;

import okhttp3.MediaType;
import vn.netbit.beans.BaseObject;

/**
 * Truongnq
 */

public class Constant {
    public static String EX_JSON;
    public static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");
    public static final MediaType TEXT = MediaType.parse("text/plain; charset=utf-8");
    public static final String SUCCESS_CODE = "00";
    public static final String FAIL_CODE = "01";
    public static final String ERROR_CODE = "99";
    public static final Gson GSON = new Gson();

    public Constant() {
        EX_JSON = GSON.toJson(BaseObject.builder().code(ERROR_CODE).build());
    }

}