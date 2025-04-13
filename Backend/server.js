import 'dotenv/config';
import express from 'express';
import sampleRoutes from './routes/sampleRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/sample', sampleRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})