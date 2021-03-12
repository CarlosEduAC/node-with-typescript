import { Request, Response, NextFunction } from 'express';

import Exception from './Exception';
import { logger } from '../config';

const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction,
): Response => {
  logger.error({
    log_message: `${error.name} - ${error.message}`,
  });

  if (error instanceof Exception) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
};

export default errorHandler;
