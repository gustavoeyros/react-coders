import { combineReducers } from "redux";
import todoReducer from "./components/todo/todoReducer";

const rootReducer = combineReducers({
    todo: todoReducer
})


export default rootReducer