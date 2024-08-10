import { ITech } from "../../interfaces/ITech";
export const ADD_TECH = "ADD_TECH";
import { createReducer, on } from '@ngrx/store';
import { ItemState } from "./reducer";
import { createTech, setTechList, updateTech } from "../store/tech.store";

const initialState: ItemState = {
    techs: []
};

// export const addTechReducer = (state: ITech[] = [], action: any) => {
//     switch(action.type) {
//         case ADD_TECH:
//             return [...state, action.payload];
//         default:
//             return state;
//     }
// }
export const techReducer = createReducer(
    initialState,
    on(createTech, (state, { tech }) => ({
      ...state,
      techs: [...state.techs, tech]
    })),
    on(updateTech, (state, { tech }) => ({
        ...state,
        techs: state.techs.map(el => {
            if(el._id === tech._id) {
                return tech;
            }
            else {
                return el;
            }
        })
    })),
    on(setTechList, (state, { techs }) => ({
        ...state,
        techs: [...techs]
    }))
);