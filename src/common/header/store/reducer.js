import * as constants from './constants'
import {fromJS} from 'immutable' //利用immutable生成不可变对象
const defaultState = fromJS({
    focused:false,
    list : [],
    page: 1,  //当前页码
    totalPage : 1, //总页码
    enterIn: false //是否进入搜索框列表
});
export default (state = defaultState, action) => {  
    switch(action.type) {
        case constants.SEARCH_FOCUS : 
            return state.set("focused",true);
        case constants.SEARCH_BLUR : 
            return state.set("focused",false);
        case constants.SEARCH_LIST : 
            return state.merge({
                "list":action.list,
                "totalPage":action.totalPage
            })
        case constants.MOUSE_ENTER : 
            return state.set("enterIn",true);
        case constants.MOUSE_LEAVE : 
            return state.set("enterIn",false);  
        case constants.REFRESH : 
            return state.set("page",action.page); 
        default : 
            return state;
    }   
}