import { Router } from 'express'
import express from 'express'
import TodoController from '../api/controllers/TodoController'
import cors from 'cors'



const router = Router()
router.use(express.json())
router.use(cors())

router.get('/todo')
router.post('/todo', TodoController.newTodo)
router.put('/todo')
router.delete('/todo')


export default router