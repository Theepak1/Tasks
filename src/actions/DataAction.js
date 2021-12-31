import { ActionType } from "./ActionType"

export const getData = ([...datas]) =>{

    return{
        type: ActionType.GET_DATA,
        payload:[...datas]
    }

}

