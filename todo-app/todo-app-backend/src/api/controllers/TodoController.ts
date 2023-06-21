import Todo from '../todo/todo';
import { Request, Response } from 'express';

export default class TodoController {
  static async newTodo(req: Request, res: Response) {
    const { description } = req.body;
    const todo = new Todo({
      description,
    });
    try {
      await todo.save();
      res.status(201).json({ message: 'New todo added!', todo });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const { description } = req.query;
      let todos;
  
      if (description && typeof description === 'string') {
        const regex = new RegExp(description, 'i'); 
        todos = await Todo.find({ description: regex });
      } else {
        todos = await Todo.find();
      }
  
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  
  
  

  static async deleteTodo(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const todo = await Todo.findByIdAndDelete(id);
      if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async updateTodo(req: Request, res: Response) {
    const { id } = req.params;
    const { done } = req.body;
    try {
      const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        { done },
        { new: true }
      );
      if (!updatedTodo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      res.status(200).json(updatedTodo);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
