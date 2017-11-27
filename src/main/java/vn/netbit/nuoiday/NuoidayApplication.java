package vn.netbit.nuoiday;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={"vn.netbit.controller" })
public class NuoidayApplication {

    public static void main(String[] args) {
        SpringApplication.run(NuoidayApplication.class, args);
    }
}
