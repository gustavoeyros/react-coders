import { Request, Response } from "express";
import BillingSchema from "../models/CreditSchema";

export default class BillingController {
    static async newbilling(req: Request, res: Response) {
        const { name, month, year, credits, debts } = req.body;
        const todo = new BillingSchema({
          name,
          month,
          year,
          credits,
          debts ,
        });
        try {
          await todo.save();
          res.status(201).json({ message: 'New billing added!', todo });
        } catch (error) {
          res.status(500).json({ message: 'Internal server error' });
        }
      }
    
      static async getAll(req: Request, res: Response) {
        try {
          const { name } = req.query;
          let todos;
      
          if (name && typeof name === 'string') {
            const regex = new RegExp(name, 'i'); 
            todos = await BillingSchema.find({ name: regex });
          } else {
            todos = await BillingSchema.find();
          }
      
          res.status(200).json(todos);
        } catch (error) {
          res.status(500).json({ message: 'Internal server error' });
        }
      }
      
      
      
    
      static async deleteBilling(req: Request, res: Response) {
        const { id } = req.params;
        try {
          const todo = await BillingSchema.findByIdAndDelete(id);
          if (!todo) {
            return res.status(404).json({ message: 'Billing not found' });
          }
          res.status(200).json({ message: 'Billing deleted successfully' });
        } catch (error) {
          res.status(500).json({ message: 'Internal server error' });
        }
      }
    
      static async updateBilling(req: Request, res: Response) {
        const { id } = req.params;
        const updatedData = req.body;
      
        try {
          const updatedTodo = await BillingSchema.findByIdAndUpdate(id, updatedData, { new: true });
          if (!updatedTodo) {
            return res.status(404).json({ message: 'Billing not found' });
          }
          res.status(200).json(updatedTodo);
        } catch (error) {
          res.status(500).json({ message: 'Internal server error' });
        }
      }


      static async countBilling(req: Request, res: Response) {
        try {
          const count = await BillingSchema.countDocuments();
          res.status(200).json({ count });
        } catch (error) {
          res.status(500).json({ message: 'Internal server error' });
        }
      }

      static async summaryBilling(req: Request, res: Response) {
        try {
          const result = await BillingSchema.aggregate([
            {
              $project: {
                credit: { $sum: "$credits.value" },
                debt: { $sum: "$debts.value" }
              }
            },
            {
              $group: {
                _id: null,
                credit: { $sum: "$credit" },
                debt: { $sum: "$debt" }
              }
            },
            {
              $project: {
                _id: 0,
                credit: 1,
                debt: 1
              }
            }
          ]);
      
          res.json(result[0] || { credit: 0, debt: 0 });
        } catch (err) {
          res.status(500).json({ errors: [err] });
        }
      }
      
      
    
    
}




  