import express from 'express';
const router = express.Router();
import { getSampleData } from '../controllers/sampleController.js';

router.get('/', getSampleData);

export default router;