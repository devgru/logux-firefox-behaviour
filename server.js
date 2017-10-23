const Server = require('logux-server').Server;

const app = new Server(
  Server.loadOptions(process, {
    subprotocol: '1.0.0',
    supports: '1.x',
    root: __dirname
  })
);

app.auth(function () {
  return true;
});

app.channel('graph', function (params, action, meta, creator) {
  app.log.add({type: 'INIT'}, {nodeIds: [creator.nodeId], reasons: ['wtf']});
  return true;
});

app.log.on("preadd", (action, meta) => {
  meta.reasons.push('wtf');
  meta.users = [0];
});

app.listen();
