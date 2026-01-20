import express, { Router } from 'express';
import { registerUser } from '../controllers/userController.js';  
import { loginUser } from '../controllers/userController.js'; 
import { logoutUser } from '../controllers/userController.js';



const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);


export default router;
