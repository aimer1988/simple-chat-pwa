const fs = require('fs');
const https = require('https');
const webSocket = require('ws');

const clients = {};

const server = https.createServer({
  cert: fs.readFileSync('../../_certificates/localhost.crt'),
  key: fs.readFileSync('../../_certificates/localhost.key'),
}).listen(3444);

const webSocketServer = new webSocket.Server({ server });

webSocketServer.on('connection', (ws) => {
  const id = Math.floor(Math.random() * 1000000000);
  clients[id] = ws;
  console.log(`Присоединился новый клиент: ${id}`);
  clients[id].send(JSON.stringify({
    type: 'userConnection',
    userId: id,
  }));

  ws.on('message', (message) => {
    console.log(`Получено сообщение ${message}`);

    const messageInfo = {
      type: 'newMessage',
      userId: id,
      message,
      time: new Date(),
    };

    for (const key of Object.keys(clients)) {
      clients[key].send(JSON.stringify(messageInfo));
    }
  });

  ws.on('close', () => {
    console.log(`соединение закрыто ${id}`);
    delete clients[id];
  });
});
