/**
 * 热门专题
 * @author xiaojun
 */
import React,{Component} from 'react'
import { connect } from 'react-redux';
import {TopicWrapper,TopicItem} from '../style'
class HotTopic extends Component {
    render() {
        const {topicList} = this.props;
        const newList = topicList.toJS(); //需要把immutable对象转换成普通对象
        return (
            <TopicWrapper>
                {
                    newList.map((item) => {
                        return (
                            <TopicItem key={item.topicContent}>
                                <img className='topic-img' src={item.topicImg}></img>
                                <div className='topic-content'>{item.topicContent}</div>
                            </TopicItem>
                        )
                    })
                } 
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topicList :  state.getIn(['home','topicList'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {            
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HotTopic); 