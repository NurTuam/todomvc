//import {counter} from "./reducer"
//import {auth} from "./auth.reduce"
import {combineReducers} from "redux"
import {user} from "./redux/user.redux"
//export default combineReducers({auth,counter})   //合并为一个reducer

export default combineReducers({user})
