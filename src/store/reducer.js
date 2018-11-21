import {combineReducers} from 'redux-immutable'; //通过redux-immutable.js可以把store变成一个immutable对象
import {reducer as HeaderReducer} from '../common/header/store/' //会加载/common/header/store/下的index文件
import {reducer as HomeReducer} from '../pages/home/store/'
import {reducer as DetailReducer} from '../pages/detail/store'
//通过combineReducers可以对reducer.js文件进行拆分，使reducer.js文件不会过大，方便管理
const reducers = combineReducers({
    header:HeaderReducer,
    home:HomeReducer,
    detail:DetailReducer
});
export default reducers;