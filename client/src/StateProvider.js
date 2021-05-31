import React,{ createContext, useContext, useReducer } from "react";

export const StateContext=createContext();

export const reducer=(state,action)=>{
     switch (action.type) {

         case "setTasks":
             return{
                 tasks:action.tasks,
             }
        default:
            return state;
    }
}

export const intialState={
    tasks:null
};

export const StateProvider=({reducer,intialState, children})=>(
     <StateContext.Provider value={useReducer(reducer,intialState)} >
         {children}
     </StateContext.Provider>
);

export const useStateContext=()=>useContext(StateContext);