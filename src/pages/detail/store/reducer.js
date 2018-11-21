import * as constants from './constants'
import {fromJS} from 'immutable' //利用immutable生成不可变对象
const defaultState = fromJS({
    "title":"",
    "content":""
})


export default (state = defaultState, action) => {  
    switch(action.type) {
        case constants.GET_DETAIL: {
            return state.merge({
                "title":action.data.title,
                "content":action.data.content
            });
        }
        default : {
            return state;
        }
    }
}