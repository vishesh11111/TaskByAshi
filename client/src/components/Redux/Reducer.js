
import { DataStr } from "./Action";

let init = {
    Auth: {},
    cartLength: 0,
}

export const GetReducerData = (state = init, action) => {
    switch (action.type) {
        case DataStr.getData:
            return { ...state, Auth: action.payload };
        case DataStr.getCartLength:
            return { ...state, cartLength: action.payload };
        default:
            return state;
    }
};