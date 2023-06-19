import { Router } from 'express'
import TodoController from '../api/controllers/TodoController'



const router = Router()


router.get('/todo')
router.post('/todo', TodoController.newTodo)
router.put('/todo')
router.delete('/todo')


export default router