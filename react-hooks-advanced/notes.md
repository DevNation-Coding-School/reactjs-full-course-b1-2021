### useReducer

useReducer

    const [state, dispatchFunction] = useReducer(reducerFunction, initialState, initFunction)

    Output:
        - state: state snapshot
        - dispatchFunction: update state function
    
    Input:
        - dispatchFunction: a function that is trigged automatically once an action is dispatched. It receives the latest snapshot and should return the new updated state
        - initialState
        - initFunction: a function that is used to set the initial state programmatically. 