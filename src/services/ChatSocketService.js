import appConfig from '../appConfig';

console.log(appConfig);

class ChatSocketService {
  constructor(protocol, host, port) {
    this.socket = new WebSocket(`${protocol}://${host}:${port}`);
  }

  sendMessage(message) {
    this.socket.send(message);
  }

  addListener(eventName, listener) {
    this.socket.addEventListener(eventName, listener);
  }
}

export default new ChatSocketService(
  appConfig.chatSocketServer.protocol,
  appConfig.chatSocketServer.host,
  appConfig.chatSocketServer.port,
);
