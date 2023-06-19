
import { legacy_createStore } from "redux"
import { GetReducerData } from "./Reducer"
export const store = legacy_createStore(GetReducerData);