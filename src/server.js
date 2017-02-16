import Hapi from 'hapi';
import Good from 'good';
import searchAPIRoutes from './routes/search';
import * as connectionConfigs from './configs/connection';

const server = new Hapi.Server({
  connections: {
    router: {
      stripTrailingSlash: true
    }
  }
});

const setConnectionServer = () => (
  new Promise((resolve) => {
    resolve(server.connection({
      port: connectionConfigs.PORT,
      host: connectionConfigs.HOST
    }));
  }
));

const setRoutes = routes => (
  new Promise((resolve) => {
    resolve(server.route(routes));
  })
);

const setPluginsHapi = config => server.register(config);

const startServer = () => {
  server.start((serverErr) => {
    if (serverErr) throw serverErr;
    console.log(`Servidor rodando em: ${server.info.uri}`);
  });
};

const configPluginLogHapi = {
  register: Good,
  options: {
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          response: '*',
          log: '*'
        }]
      }, {
        module: 'good-console'
      }, 'stdout']
    }
  }
};

Promise.all([
  setConnectionServer(connectionConfigs),
  setRoutes(searchAPIRoutes),
  setPluginsHapi(configPluginLogHapi)
]).then(startServer);
