import { todosTypes } from "../constants/actionTypes"
const todosFromLocal = localStorage.getItem("Todos")
const todos = todosFromLocal ? JSON.parse(todosFromLocal) : []
export const todosReducer = (state = { todos: todos, inputTitle: "", inputDate: "", }, action) => {
    switch (action.type) {
        case todosTypes.ADD:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case todosTypes.TITLE:
            return {
                ...state,
                inputTitle: action.payload
            }
        case todosTypes.DATE:
            return {
                ...state,
                inputDate: action.payload
            }
        case todosTypes.RESET:
            return {
                ...state,
                inputDate: "",
                inputTitle: ""
            }
        case todosTypes.COMPLETED:
            const updatedTodos = state.todos.map((todo) => {
                console.log(todo.completed);
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
            return {
                ...state,
                todos: updatedTodos
            };
        case todosTypes.DELETE:
            const filteredTodos = state.todos.filter((el) => el.id !== action.payload)
            return {
                ...state,
                todos: filteredTodos
            }
        case todosTypes.OPEN_MODAL:
            const openModalTodos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, openModal: !todo.openModal };
                }
                return todo;
            });
            console.log(openModalTodos);
            return {
                ...state,
                todos: openModalTodos
            }
        case todosTypes.EDIT:
            const updatedFilterTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, title: action.payload.title, date: action.payload.date };
                }
                return todo;
            });
            return {
                ...state,
                todos: updatedFilterTodos,
            };

        default:
            return state
    }
}