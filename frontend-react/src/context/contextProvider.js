import { useContext, useReducer, createContext } from "react";

// create context
export const StateContext = createContext();

//context provider wrapper
export const StateProvider = ({ reducer, initialState, children }) => {
  //
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//
export const useStateValue = () => useContext(StateContext);
