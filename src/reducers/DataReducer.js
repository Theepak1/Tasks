import { ActionType } from "../actions/ActionType";


const initialState ={
    datas:[]
};

const DataReducer = (state = initialState,{type,payload}) => {

    switch(type){
 
        case ActionType.GET_DATA:
                return {...state,datas:payload};
        
        default:
             return state;
        
    }

}

export default DataReducer;