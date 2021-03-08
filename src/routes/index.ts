import { Router } from 'express';

import Exception from '../errors/Exception';

const routes = Router();

routes.get('/', (request, response) => {
  throw new Exception('Error Test', 401);

  response.json({ message: 'Hello World!' });
});

export default routes;
