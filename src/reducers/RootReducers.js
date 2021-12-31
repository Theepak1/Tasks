import { combineReducers } from "redux";
import  DataReducer from "./DataReducer"

const Reducers = combineReducers(
    {
        allDatas:DataReducer
        
    }
)

export default Reducers;