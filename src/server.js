import Hapi from 'hapi';
import Good from 'good';
import searchRoutes from './routes/search';
import * as connectionConfigs from './configs/connection';

const server = new Hapi.Server();

server.connection({
  port: connectionConfigs.PORT,
  host: connectionConfigs.HOST
});

server.route(searchRoutes);

// Registrando log
server.register({
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
}, (err) => {
  if (err) {
    throw err;
  }

  server.start((serverErr) => {
    if (serverErr) throw serverErr;

    console.log(`Servidor rodando em: ${server.info.uri}`);
  });
});
