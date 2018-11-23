package vn.netbit.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import vn.netbit.contant.Constant;
import vn.netbit.utils.RestClient;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
import com.google.gson.Gson;
import javax.servlet.http.HttpServletRequest;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import vn.netbit.config.Config;

@Controller
public class DefaultController {

    private static final Logger LOGGER = LogManager.getLogger(DefaultController.class);
    private static final Gson GSON = new Gson();

    @GetMapping("/403")
    public String error403() {
        return "/error/403";
    }
    
    @ResponseBody
    @RequestMapping(value = "/test", method = RequestMethod.POST)
    public String dsTranSuccessByUpdatePager(Model model,
            HttpServletRequest request,
            @RequestParam(required = false, value = "draw", defaultValue = "0") String draw){
        return draw;
    }
    
    @RequestMapping(value = "/getGeoSuggest", method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public String getGeoSuggest(HttpServletRequest request) {
        try {
            String query = request.getParameter("query");
            query = query.replaceAll(" ", "+");
            String url = String.format(Config.getAppConfig().getString("BING_GEOSUGGEST_URL"), query);
            return GSON.toJson(RestClient.getData(url));
        } catch (Exception e) {
            // TODO: handle exception

            return Constant.EX_JSON;
        }
    }

}
