package vn.netbit.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import vn.netbit.contant.Constant;
import vn.netbit.utils.RestClient;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
import com.google.gson.Gson;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import java.util.UUID;
import java.util.logging.Level;

import javax.servlet.http.HttpServletRequest;
import org.springframework.ui.Model;
import vn.netbit.beans.JoditUploadResult;
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
    public String dsTranSuccessByUpdatePager(Model model, HttpServletRequest request,
            @RequestParam(required = false, value = "draw", defaultValue = "0") String draw) {
        return draw;
    }

    @RequestMapping(value = "/getGeoSuggest", method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public String getGeoSuggest(HttpServletRequest request,
            @RequestParam(value = "query", required = false, defaultValue = "") String query) {
        String token = UUID.randomUUID().toString();
        try {
            query = query.replaceAll(" ", "+");
            String url = String.format(Config.getAppConfig().getString("BING_GEOSUGGEST_URL"), query);
            return GSON.toJson(RestClient.getData(url));
        } catch (Exception e) {
            // TODO: handle exception
            LOGGER.error("Token [{}] - Get GeoSuggest Exception: {}", token, e);
            return Constant.EX_JSON;
        }
    }

    @RequestMapping(value = "/markdownhelp", method = RequestMethod.GET)
    public String markdownHelp() {
        return "markdownhelp";
    }

    @RequestMapping(value = "/uploadImage", method = RequestMethod.POST, produces = {"application/json"})
    @ResponseBody
    public String uploadImage(HttpServletRequest request, @RequestParam(value = "files", required = false) MultipartFile[] multiparts) {
        try {
            LOGGER.debug("Post method of uploaded Questions ");
            List<String> files = new ArrayList<String>();
            for (MultipartFile multipart:multiparts){
                String filename = multipart.getOriginalFilename();
                File dest = new File(Config.DIR + "/upload/img/" + filename);
                multipart.transferTo(dest);
                files.add(filename);
            }
            JoditUploadResult res = JoditUploadResult.builder()
                    .error(0)
                    .path("")
                    .msg("Upload Success")
                    .baseurl("/img/")
                    .files(files)
                    .build();
                    
            return GSON.toJson(res);
        } catch (Exception ex) {
            JoditUploadResult res = JoditUploadResult.builder()
                    .error(1)
                    .msg(ex.getStackTrace().toString())
                    .build();
                    
            return GSON.toJson(res);
        }
        
    }

}
