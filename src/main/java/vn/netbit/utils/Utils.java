/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.utils;

import java.security.MessageDigest;
import java.util.Properties;
import java.util.Random;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
/**
 *
 * @author Tran Ba Y
 */
public class Utils {
    private static final Logger logger = LogManager.getLogger(Utils.class);
    public static final String EMPTY = "";
    
    public static boolean isNullOrEmpty(String value) {
        return value == null || value.trim().isEmpty();
    }
    
    public static String encodeMD5(String s) {
        if (isNullOrEmpty(s)) {
            return "";
        }
        char hexDigits[] = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'A', 'B', 'C', 'D', 'E', 'F'};
        try {
            byte[] strTemp = s.getBytes();
            MessageDigest messageDigest = MessageDigest.getInstance("MD5");
            messageDigest.update(strTemp);
            byte[] md = messageDigest.digest();
            int j = md.length;
            char str[] = new char[j * 2];
            int k = 0;
            for (int i = 0; i < j; i++) {
                byte byte0 = md[i];
                str[k++] = hexDigits[byte0 >>> 4 & 0xf];
                str[k++] = hexDigits[byte0 & 0xf];
            }
            return String.valueOf(str);
        } catch (Exception e) {
            return "";
        }
    }
    
    public static String genRanDomPass() {
        
        String SALTCHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String NUMCHARS="0123456789";
        StringBuilder salt = new StringBuilder();
        Random rnd = new Random();
        int index;
        while (salt.length() < 5) {
            index = (int) (rnd.nextFloat() * SALTCHARS.length());
            salt.append(SALTCHARS.charAt(index));
        }
        index = (int) (rnd.nextFloat() * NUMCHARS.length());
        salt.append(NUMCHARS.charAt(index));
        String saltStr = salt.toString();
        return saltStr;
    }
    
    public static boolean sendEmail(final String fromEmail, final String password, String toEmail, String ccEmail, String title, String content) {
        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.socketFactory.port", "465");
        props.put("mail.smtp.socketFactory.class",
                "javax.net.ssl.SSLSocketFactory");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.port", "465");

        Session session = Session.getInstance(props,
                new Authenticator() {
                    @Override
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(fromEmail, password);
                    }
                });

        try {
            logger.info("Send mail with input fromEmail: {}, toEmail: {}, ccEmail: {}, title: {}, content: {}",fromEmail, toEmail, ccEmail, title, content);
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(fromEmail));
            String[] arrToEmail;
            if (toEmail.contains(";")) {
                arrToEmail = toEmail.split(";");
                for (int i = 0; i < arrToEmail.length; i++) {
                    message.addRecipients(Message.RecipientType.TO, InternetAddress.parse(arrToEmail[i]));
                }
            } else {
                message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(toEmail));
            }
            String[] arrCCEmail;
            if (ccEmail.contains(";")) {
                arrCCEmail = ccEmail.split(";");
                for (int i = 0; i < arrCCEmail.length; i++) {
                    message.addRecipients(Message.RecipientType.CC, InternetAddress.parse(arrCCEmail[i]));
                }
            } else {
                message.setRecipients(Message.RecipientType.CC, InternetAddress.parse(ccEmail));
            }
            message.setSubject(title, "utf-8");
            message.setText(content, "utf-8");
            Transport.send(message);
            return true;
        } catch (MessagingException e) {
            logger.error("Send mail Exception: {}",e);
            return false;
        }
    }

}
