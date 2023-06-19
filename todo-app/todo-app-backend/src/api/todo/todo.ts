import { Schema, model } from 'mongoose'


interface ITodo{
    description: string
    done: boolean
    createdAt: Date
}

const todoSchema = new Schema<ITodo>({
    description: {type: String, require: true},
    done: {type: Boolean, require: true, default: false},
    createdAt: {type: Date, require: false, default: Date.now()}
})

const Todo = model<ITodo>("Todo", todoSchema)

export default Todo