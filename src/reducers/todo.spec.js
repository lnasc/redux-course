import reducer from './todo';
import { start } from 'pretty-error';

describe('Todo Reducer', () => {
    test('returns a state obejct', () => {
        const result = reducer(undefined, { type: 'ANYTHING' });
        expect(result).toBeDefined();
    })
    test('adds a todo', () => {
        const startState = {
          todos: [
            {id: 1, name:'Create Static UI', isComplete: true},
            {id: 2, name:'Create Initial State', isComplete: false},
            {id: 3, name:'Use state to render UI', isComplete: false}
          ]
        }
        const expectedState = {
          todos: [
            {id: 1, name:'Create Static UI', isComplete: true},
            {id: 2, name:'Create Initial State', isComplete: false},
            {id: 3, name:'Use state to render UI', isComplete: false},
            {id: 4, name:'Added todo', isComplete: false}
          ]
        }
        const action = {type:'TODO_ADD', payload: {id: 4, name:'Added todo', isComplete: false}}
        const result = reducer(startState, action)
        expect(result).toEqual(expectedState)
    })
    test('update current todo', () => {
        const startState = {
            currentTodo: null
        }
        const expectedState = {
            currentTodo: 'New Todo'
        }
        const action = {type: 'CURRENT_UPDATE', payload: 'New Todo'};
        const result = reducer(startState, action);
        expect(result).toEqual(expectedState);
    })

})