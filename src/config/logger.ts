import Pino from 'pino';
import { formatDateTimeComplete } from '../utils';

const logger = Pino({
  formatters: {
    level(label: string) {
      return {
        log_level: label.toUpperCase(),
      };
    },
    bindings() {
      return {
        application: 'template-node-typescript',
        environment: 'dev',
        version: '1.0',
      };
    },
  },
  timestamp: () => `,"date":"${formatDateTimeComplete(new Date())}"`,
  messageKey: 'log_message',
});

export default logger;
