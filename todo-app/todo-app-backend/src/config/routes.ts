import { Router } from 'express';
import express from 'express';
import TodoController from '../api/controllers/TodoController';
import cors from 'cors';

const router = Router();
router.use(express.json());
router.use(cors());

router.get('/todo', TodoController.getAll);
router.post('/todo', TodoController.newTodo);
router.put('/todo/:id', TodoController.updateTodo);
router.delete('/todo/:id', TodoController.deleteTodo);

export default router;
