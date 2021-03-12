import app from './app';
import { logger } from './config';

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  logger.info(`🚀 Server started on port ${PORT}!`);
});
