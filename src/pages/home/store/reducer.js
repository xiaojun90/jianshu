import {fromJS} from 'immutable' //利用immutable生成不可变对象
import * as constants from './constants'
const defaultState = fromJS({
    topicList:[],  //专题列表
    "articleList":[],
    boardList:[],
    authorsList:[]
});
export default (state = defaultState, action) => {  
    switch(action.type) {
        case constants.GET_ARTICLE_LIST : {
            return state.set("articleList",action.data);
        }
        case constants.GET_HOME_LIST : {
            return state.merge({
                "articleList": action.articleList,
                "topicList":action.topicList,
                "boardList":action.boardList,
                "authorsList":action.authorsList
            });
        }
        default : {
            return state;
        }
    }
}