
import axios from 'axios'
import * as constants from './constants'
const getDetail = (data) => ({
    type: constants.GET_DETAIL,
    data
})

export const getDetailAction = (id)=> {
    return (dispatch)=> {
        axios.get('/api/getDetail.json?id=' + id).then((resp)=> {
            const data = resp.data;
            dispatch(getDetail(data.data));

        });
    
    }
}