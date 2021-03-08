import express from 'express';
import cors from 'cors';

import routes from './routes';
import errorHandler from './errors/errorHandler';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorHandler);

export default app;
