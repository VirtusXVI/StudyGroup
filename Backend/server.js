import 'dotenv/config';
import express from 'express';
import sampleRoutes from './routes/sampleRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { authMiddleware } from './middleware/authMiddleware.js';
import morgan from 'morgan';
import cors from 'cors'
import helmet from 'helmet';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: `http://localhost:${PORT}`, credentials: true }));
app.use(helmet());

app.use('/api/sample', sampleRoutes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})