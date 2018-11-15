import {fromJS} from 'immutable' //利用immutable生成不可变对象
const defaultState = fromJS({
    topicList:[
        {
            "topicImg":'//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
            "topicContent":'简书电影'
        },
        {
            "topicImg":'//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/644',
            "topicContent":'手绘'
        },
        {
            "topicImg":'//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
            "topicContent":'读书'
        },
        {
            "topicImg":'//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
            "topicContent":'旅行·在路上'
        },
        {
            "topicImg":'//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
            "topicContent":'@IT·互联网'
        },
        {
            "topicImg":'//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
            "topicContent":'故事'
        },
        {
            "topicImg":'//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
            "topicContent":'摄影'
        }

    ]  //专题列表
});
export default (state = defaultState, action) => {  
    return state; 
}