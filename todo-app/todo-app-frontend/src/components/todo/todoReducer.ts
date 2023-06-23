const INITIAL_STATE = {
    description: '',
    list: []
}

export default (state= INITIAL_STATE, action: any) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload}
        case 'TODO_SEARCHED':
            return{...state, list: action.payload.data}
        case 'TODO_CLEAR':
            return{...state, description: ''}
        case 'TODO_FILTERED':
            return {...state, list: action.payload.data}
        default:
            return state
    }
}