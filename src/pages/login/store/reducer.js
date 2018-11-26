import * as constants from './constants'
import {fromJS} from 'immutable' //利用immutable生成不可变对象
const defaultState = fromJS({
    "hoverLogin":false,
    "hoverRegist":false
})


export default (state = defaultState, action) => {  
    switch(action.type) {
        case constants.CHANGE_HOVER_REGIST : {
            return state.set("hoverRegist",action.hoverRegist);
        }
        default : {
            return state;
        }
    }
}