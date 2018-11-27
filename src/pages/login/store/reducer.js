import * as constants from './constants'
import {fromJS} from 'immutable' //利用immutable生成不可变对象
const defaultState = fromJS({
    "hoverLogin":false,
    "hoverRegist":false,
    "showLoginForm":true,
    "loginState":false //登录状态
})


export default (state = defaultState, action) => {  
    switch(action.type) {
        case constants.CHANGE_HOVER_REGIST : {
            return state.set("hoverRegist",action.hoverRegist);
        }
        case constants.CHANGE_SHOW_LOGIN_FORM : {
            return state.set("showLoginForm",action.showLoginForm);
        }
        default : {
            return state;
        }
    }
}
