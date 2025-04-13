import express from 'express';
const router = express.Router();
import { userCreate, userRead, userUpdate, userDelete } from '../controllers/userController.js';

router.post('/create', userCreate);
router.get('/', userRead);
router.put('/update', userUpdate);
router.delete('/delete', userDelete);

export default router;