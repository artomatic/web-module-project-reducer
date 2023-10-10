# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

* The user presses the 1 button.
* onClick event handler is triggered
* dispatch is invoked, taking an argument as the...
    * output of the addOne function, the invocation of which, in turn, returns the {type: ADD_ONE} action type
* dispatch invoked the reducer, which takes in as arguments the state hooked up previously by useDispatch() and the action argument in the form of the output mentioned above
* switch matches the ADD_ONE case to the action.type argument
* an immutable (brand new) state is constructed by copying the previous state and replacing its 'total' property with the outcome of the + 1 operation
* reducer returns this new state
* React detects a change in state and re-renders the page
* TotalDisplay shows the total plus 1.
