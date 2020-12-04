import { act } from "react-dom/test-utils"

const intialState = {
    Name: "Aadesh",
    Age: "31"
}




export function Reducer(state = intialState, action) {
    // we dont change state directly
    debugger;
    var newState = { ...state }

    if (action.type == "actionName") {
        newState.Name = action.Name
        return newState
    }

    if (action.type == "User") {
        console.log(action.Users)
    }
    return state

}