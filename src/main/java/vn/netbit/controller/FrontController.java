/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.controller;

import com.google.gson.Gson;
import javax.servlet.http.HttpServletRequest;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import vn.netbit.beans.BusinessInfo;
import vn.netbit.beans.Post;
import vn.netbit.beans.Taxonomy;
import vn.netbit.beans.UserLogged;
import vn.netbit.cache.CacheManager;
import vn.netbit.daos.CmsDao;
import vn.netbit.utils.Utils;

/**
 *
 * @author lufiv
 */
@Controller
public class FrontController {

    private static final Logger LOGGER = LogManager.getLogger(FrontController.class);
    private static final Gson GSON = new Gson();

    @RequestMapping("/")
    public String index(Model model) {
        model.addAttribute("name", "test");
        return "index";
    }

    @RequestMapping("/new")
    public String newBusiness(Model model) {
        return "new";
    }

    @RequestMapping(value = "/new", method = RequestMethod.POST)
    public String newBusiness(Model model, @ModelAttribute BusinessInfo businessInfo) {
        try {

            return "new";
        } catch (Exception e) {
            // TODO: handle exception
            return "new";
        }
    }

    @RequestMapping("/markdown")
    public String markdown() {
        return "Commons/markdown";
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public String topic(Model model, @PathVariable(value = "id") String id) {
        // model.addAttribute("name", "test");
        return id;
    }

    @RequestMapping(value = "/topic/{id}", method = RequestMethod.GET)
    public String topic(Model model) {
        // model.addAttribute("name", "test");
        return "topic";
    }

    /**
     * 
     * @param model
     * @return
     */
    @RequestMapping(value = "/new/topic", method = RequestMethod.GET)
    public String newTopic(Model model, @ModelAttribute(value = "Post") Post post) {
        model.addAttribute("taxonomyList", CacheManager.getInstance().getTaxonomyList());
        model.addAttribute("Post", post);
        return "newtopic";
    }

    /**
     *
     * @param model
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/new/topic", method = RequestMethod.POST)
    public String newTopic(Model model, HttpServletRequest request, @RequestBody Post post) {
        try {
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            UserLogged user = (UserLogged) auth.getPrincipal();

            post.setUserId(user.getId());
            post.setUrl(Utils.toSlug(post.getTitle()));
            int id = CmsDao.getInstance().createPost(post);
            if (id <= 0) {
                return "";
            }
            return "/topic/" + post.getUrl();
        } catch (Exception e) {
            LOGGER.error("Create newTopic ex: {}", e);
            return "";
        }
    }

    @ResponseBody
    @RequestMapping(value = "/newTag", method = RequestMethod.POST)
    public String newTag(Model model, HttpServletRequest request) {
        try {
            String tag = request.getParameter("tag").trim();
            Taxonomy taxonomy = new Taxonomy();
            taxonomy.setTaxonomyName(tag);
            taxonomy.setTaxonomyType("tag");
            taxonomy.setTaxonomyUrl(Utils.toSlug(tag));
            int id = CmsDao.getInstance().createTaxonomy(taxonomy);
            if (id <= 0) {
                return "";
            }
            taxonomy.setId(id);
            return GSON.toJson(taxonomy);
        } catch (Exception e) {
            LOGGER.error("newTag error: {}", e);
            return "";
        }
    }
}
