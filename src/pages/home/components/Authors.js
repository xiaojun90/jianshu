/**
 * 推荐作者
 * @author xiaojun
 */
import React,{Component} from 'react'
import {AuthorsWrapper,AuthorsItem} from '../style'
import { connect } from 'react-redux';
class Authors extends Component {
    render() {
        const {list} = this.props;
        console.log(list);
        return (
            <AuthorsWrapper>
                <div className='authors-header'>
                    <p className='title'>推荐作者</p>
                    <a className='refresh'><i className='iconfont'>&#xe622;</i>换一批</a>
                </div>
                {
                    list.map((item)=> (
                        <AuthorsItem key={item.get("id")}>
                            <div className='item-content'>
                                <a>
                                <img  className='authors-img' alt="" src={item.get("imgUrl")}></img>
                                </a>
                                <a className='name' >
                                    {item.get("author")}
                                </a>
                                <p className='comment'>写了{item.get("wordNums")}字 · {item.get("followNums")}喜欢</p>
                            </div>
                            <div className='follow'>+关注</div>
                        </AuthorsItem>
                    ))
                }          
            </AuthorsWrapper>
        )
    }
}

const mapState = (state)=> ({
    list :  state.getIn(['home','authorsList'])
});

const mapDispatch = (dispatch)=> {
    return {
        
    }
}

export default connect(mapState,mapDispatch)(Authors)