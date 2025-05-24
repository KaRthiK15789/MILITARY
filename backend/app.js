// app.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/db.js';
import routes from './routes/index.js';
import logMiddleware from './middleware/logMiddleware.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 🛠 API Logging Middleware (before routes to log all requests)
app.use(logMiddleware);

// 📦 Route Mount
app.use('/api', routes);

// 🚀 Server Start
const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  console.log('✅ DB connected');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
