
import axios from 'axios';
import * as constants from './constants'
import {fromJS} from 'immutable'
export const getArticleList = () => {
    return (dispatch) => {
        axios.get('api/getArticleList.json').then((resp) => {
            const action = {
                type: constants.GET_ARTICLE_LIST,
                data:fromJS(resp.data.data)
            }
            dispatch(action);
        });
    };
};


export const getHomeList = ()=> {
    return (dispatch) => {
        axios.get('api/getHomeList.json').then((resp) => {
            console.log(resp.data.data);
            const action = {
                type: constants.GET_HOME_LIST,
                articleList:fromJS(resp.data.data.articleList),
                topicList:fromJS((resp.data.data.topicList)),
                boardList:fromJS((resp.data.data.boardList)),
            };
            dispatch(action);
        });
    }
}