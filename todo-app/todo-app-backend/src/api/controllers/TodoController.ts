import Todo from '../todo/todo'
import { Request, Response } from 'express'

export default class TodoController {
    static async newTodo(req: Request, res: Response){
       const {description, done} = req.body
        const todo = new Todo({
            description,
            done
        })
        try {
            await todo.save()
            res.status(201).json({message: "New todo added!", "todo": todo})
        } catch (error) {
            
        }
    }
}