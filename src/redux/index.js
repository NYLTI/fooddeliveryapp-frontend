import { combineReducers } from 'redux'
import RegisterReducer from './reducers/RegisterReducer'
import LogReducer from './reducers/LogReducer'

const rootReducer = combineReducers({
    login:LogReducer,
    reg:RegisterReducer
})
export default rootReducer