import * as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable' //利用immutable生成不可变对象

const searchList =(data) => ({
    type : constants.SEARCH_LIST,
    list: fromJS(data),
    totalPage : Math.ceil(data.length / 10)
}); 



export const searchFocusAction = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlurAction = () => ({
    type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

export const refresh = (page) => ({
    type: constants.REFRESH,
    page
});





//获得搜索列表
export const getSearchListAction = () => {
    //通过redux-thunk可以在action中返回函数，并且接收dispatch参数
    return (dispatch)=> {
        axios.get("api/getSearchList.json").then((res)=>{
            const data = res.data;
            dispatch(searchList(data.data));
        });
    }
}