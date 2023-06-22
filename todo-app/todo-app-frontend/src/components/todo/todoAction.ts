import axios from "axios"

const URL = 'http://localhost:3003/api/todo'

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
