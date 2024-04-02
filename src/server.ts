import app from "./app";
import { Config } from "./config";
import logger from "./config/logger";

const startServer = () => {
  const PORT = Config.PORT;

  try {
    app.listen(PORT, () =>
      logger.info(`Server Listening on http://localhost:${PORT}`),
    );
  } catch (err) {
    if (err instanceof Error) {
      logger.error(err);
      setTimeout(() => {
        process.exit(1);
      }, 1000);
    }
  }
};

startServer();
