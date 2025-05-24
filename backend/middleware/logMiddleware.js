const db = require("../models");

const logMiddleware = async (req, res, next) => {
  const start = Date.now();

  res.on("finish", async () => {
    const responseTime = Date.now() - start;

    await db.ApiLog.create({
      method: req.method,
      endpoint: req.originalUrl,
      userId: req.user?.id || null,
      statusCode: res.statusCode,
      responseTime,
      requestBody: req.body || {},
      queryParams: req.query || {}
    });
  });

  next();
};

module.exports = logMiddleware;
