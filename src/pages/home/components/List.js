/**
 * List列表
 * @author xiaojun
 */
import React,{Component} from 'react'
import {ListItem} from '../style'
import { connect } from 'react-redux';
import {actionCreators} from '../store';
class List extends Component {
    render() {
        const {list} = this.props;
        return (
            <div>
                {
                    list.map((item)=>(
                        <ListItem key={item.get('id')}>
                            <div className='item-info'>
                                <h3 className='item-title'>{item.get('title')}</h3>
                                <p className='item-desc'>{item.get('desc')}</p>
                                <div className='item-meta'>
                                    <a className='item-nickname'>{item.get('author')}</a>
                                    <a className='item-comments'><i className='iconfont'>&#xe601;</i>{item.get('comments')}</a>
                                    <a className='item-stars'><i className='iconfont'>&#xe607;</i>{item.get('stars')}</a>
                                </div>
                            </div>
                            <img className = 'item-img' src={item.get('imgUrl')}></img>             
                        </ListItem>
                    ))
                }                
            </div>
        )
    }

    componentDidMount() {
        //通过this.props的方式调用mapDispatchToProps的方法
        //this.props.getArticleList();
    }
}

const mapStateToProps = (state) => {
    return {
        list :  state.getIn(['home','articleList'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticleList() {
            dispatch(actionCreators.getArticleList());
        }            
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List)