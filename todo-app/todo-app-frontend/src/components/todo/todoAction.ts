import axios from "axios"

const URL = 'http://localhost:3003/api/todo'

interface IInput {
    _id?: string;
    description: string;
    list: [{ description: string; _id: string }];
}

export const changeDescription = (event: React.ChangeEvent<HTMLInputElement>) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const refresh = () => {
    const request = axios.get(`${URL}`)
    return{
        type: 'TODO_SEARCHED',
        payload: request
    }
}




export const search = (description: string) => {
   const request = axios.get(`${URL}?sort=-createdAt&description=${description}`)
   return {
    type: 'TODO_FILTERED',
    payload: request
   }
  };

export const add = (description: string) => {
    return (dispatch: any) => {
        axios.post(URL, {description})
        .then(resp =>dispatch(clear()))
        .then(() => dispatch(refresh()))
    }
}

export const markAsDone = (todo: IInput) => {
    return (dispatch: any) => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
        .then(() => dispatch(refresh()))
    }
}

export const markAsPending = (todo: IInput) => {
    return (dispatch: any) => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
        .then(() => dispatch(refresh()))
    }
}

export const remove = (todo: IInput) => {
    return (dispatch: any) => {
        axios.delete(`${URL}/${todo._id}`)
        .then(() => dispatch(refresh()))
    }
}


export const clear = () => {
    return [{type: 'TODO_CLEAR'}, refresh()]
}