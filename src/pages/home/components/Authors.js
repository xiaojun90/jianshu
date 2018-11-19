/**
 * 推荐作者
 * @author xiaojun
 */
import React,{Component} from 'react'
import {AuthorsWrapper,AuthorsItem} from '../style'
class Authors extends Component {
    render() {
        return (
            <AuthorsWrapper>
                <p className='title'>推荐作者</p>
                <a className='refresh'><i className='iconfont'>&#xe622;</i>换一批</a>
                <AuthorsItem>
                </AuthorsItem>
            </AuthorsWrapper>
        )
    }
}

export default Authors