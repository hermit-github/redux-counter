import { createStore } from "redux"

const countReducer = (state={counter:0,counter2:0},action) => {
    switch (action.type) {
        case "increment":
            return {...state,counter:state.counter + 1}
            
        case "decrement":
            return {...state,counter:state.counter - 1}

        case "increment2":
            return {...state,counter2:state.counter2 + 2}

        case "decrement2":
            return {...state,counter2:state.counter2 - 2}
            
        default:
            return state
    }
}

const store = createStore(countReducer);

export default store