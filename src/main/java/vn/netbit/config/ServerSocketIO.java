/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.config;

import com.corundumstudio.socketio.AckRequest;
import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketConfig;
import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.DataListener;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import vn.netbit.beans.NotifyObject;

/**
 *
 * @author truongnq
 */
public class ServerSocketIO {

    private static final Logger LOGGER = LogManager.getLogger(ServerSocketIO.class);
    private SocketIOServer socketIOServer;

    private static final class SingletonHolder {

        private static final ServerSocketIO instance = new ServerSocketIO();
    }

    public static ServerSocketIO getInstance() {
        return SingletonHolder.instance;
    }

    public ServerSocketIO() {

        Configuration config = new Configuration();
        config.setPort(8888);
//        config.setContext("/truongnq");

        SocketConfig socketConfig = new SocketConfig();
        socketConfig.setReuseAddress(true);
        config.setSocketConfig(socketConfig);

        socketIOServer = new SocketIOServer(config);

        socketIOServer.addEventListener("newcomment", NotifyObject.class,
                new DataListener<NotifyObject>() {

            @Override
            public void onData(SocketIOClient client, NotifyObject data,
                    AckRequest ackRequest) throws Exception {
                socketIOServer.getBroadcastOperations().sendEvent(data.getId(), data.getContent());
            }
        });

        socketIOServer.addEventListener("join", String.class, new DataListener<String>() {
            @Override
            public void onData(SocketIOClient socketIOClient, String roomName, AckRequest ackRequest) throws Exception {
                LOGGER.info("<join room name> " + roomName);
                socketIOClient.joinRoom(roomName);
            }
        });

        socketIOServer.addEventListener("leave", String.class, new DataListener<String>() {
            @Override
            public void onData(SocketIOClient socketIOClient, String roomName, AckRequest ackRequest) throws Exception {
                LOGGER.info("<leave room name> " + roomName);
                socketIOClient.leaveRoom(roomName);
            }
        });

        socketIOServer.addEventListener("send", NotifyObject.class, new DataListener<NotifyObject>() {
            @Override
            public void onData(SocketIOClient socketIOClient, NotifyObject data, AckRequest ackRequest) throws Exception {
                sendToRoom(data);
            }
        });

        socketIOServer.start();
    }

    private boolean sendBroadcast(NotifyObject data) {
        try {
            socketIOServer.getBroadcastOperations().sendEvent(data.getId(), data.getContent());
            return true;
        } catch (Exception ex) {
            LOGGER.error("sendBroadcast ex: {}", ex);
            return false;
        }
    }

    private boolean sendToRoom(NotifyObject data) {
        try {
            socketIOServer.getRoomOperations(data.getRoom()).sendEvent("message", data.getContent());
            return true;
        } catch (Exception ex) {
            LOGGER.error("sendBroadcast ex: {}", ex);
            return false;
        }
    }
    
    public boolean shutdown(){
        try {
            socketIOServer.stop();
            return true;
        } catch (Exception e) {
            LOGGER.error("Shutdown ex: {}", e);
            return false;
        }
    }

}
