import { connect } from 'mongoose'

export async function run(){
    try {
        await connect('mongodb://127.0.0.1/todo')
    } catch (e) {
        console.log(e)
    }
}