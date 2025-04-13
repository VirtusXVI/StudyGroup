import express from 'express';
const router = express.Router();
import { userCreate, userRead, userUpdate, userDelete } from '../controllers/userController.js';

router.post('/create', userCreate);
router.post('/', userRead);
router.patch('/update', userUpdate);
router.delete('/delete/:id', userDelete);

export default router;