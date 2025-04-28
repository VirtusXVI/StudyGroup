import express from 'express';
const router = express.Router();
import { userCreate, userRead, userUpdate, userDelete, userLogin } from '../controllers/userController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

router.post('/create', userCreate);
router.post('/', authMiddleware, userRead);
router.patch('/update', userUpdate);
router.delete('/delete/:id', userDelete);
router.post('/login', userLogin);

export default router;