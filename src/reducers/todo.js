const initState = {
    todos: [
        {id: 1, name:'Create Static UI', isComplete: true},
        {id: 2, name:'Create Initial State', isComplete: true},
        {id: 3, name:'Use state to render UI', isComplete: false}
    ],
    currentTodo: 'temp'
}

const addTodo = (state, todo) => {
    return {...state, todos: [...state.todos, todo]};
}

const updateCurrentTodo = (state, todoName) => {
    return { ...state, currentTodo: todoName }
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return addTodo(state, action.payload);
        case 'CURRENT_UPDATE':
            return updateCurrentTodo(state, action.payload);
        default:
            return state;
    }
}