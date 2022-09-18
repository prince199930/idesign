import myReducer from "../reducers/reducer"
import { createStore } from "redux";

const configureStore = createStore(myReducer)

export default configureStore