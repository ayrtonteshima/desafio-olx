import Hapi from 'hapi';
import searchRoutes from './src/routes/search';
import * as connectionConfigs from './src/configs/connection';

const server = new Hapi.Server();
server.connection({ port: connectionConfigs.PORT, host: connectionConfigs.HOST });

server.route(searchRoutes);

server.start((err) => {
  if (err) throw err;

  console.log(`Servidor rodando em: ${server.info.uri}`);
});
