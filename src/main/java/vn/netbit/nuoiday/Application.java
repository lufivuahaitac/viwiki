 package vn.netbit.nuoiday;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.core.config.Configurator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import vn.netbit.config.Config;
import vn.netbit.utils.ConnectionManager;
import vn.netbit.utils.ShutdownListener;

@SpringBootApplication(scanBasePackages={"vn.netbit.controller" })
public class Application {
    
    private static Logger logger;

    public static void main(String[] args) throws IOException {
        loadLogger();
        Config.init();
        ConnectionManager.getInstance();
        //Runtime.getRuntime().addShutdownHook(new ShutDownHook());
        SpringApplication app = new SpringApplication(Application.class);
        app.addListeners(new ShutdownListener());
        app.run(args);
        //SpringApplication.run(app, args);
    }
    
    
    private static void loadLogger() throws IOException {
        String configuration = new File(".").getCanonicalPath() + "/config/log4j2.xml";
        URI source = new File(configuration).toURI();
        Configurator.initialize("contextLog4J", null, source);
        logger = LogManager.getLogger(Application.class);
        System.out.println("Init Logger Success");
        logger.debug("Debugging log");
        logger.info("Info log");
        logger.warn("Hey, This is a warning!");
        logger.error("Oops! We have an Error. OK");
        logger.fatal("Damn! Fatal error. Please fix me.");
    }
    
}
