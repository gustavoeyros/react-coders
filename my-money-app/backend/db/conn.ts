import { connect } from "mongoose";


export async function run() {
  try {
    await connect('mongodb://127.0.0.1/moneyapp');
  } catch (e) {
    console.log(e);
  }
}