/**
 * List列表
 * @author xiaojun
 */
import React,{Component} from 'react'
import {ListItem} from '../style'
import { connect } from 'react-redux';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';
class List extends Component {
    render() {
        const {list} = this.props;
        return (
            <div>
                {
                    list.map((item)=>(
                        <ListItem key={item.get('id')}>
                            <div className='item-info'>
                                <Link to={"/detail/" + item.get('id')} className='item-title'>
                                    {item.get('title')}
                                </Link>
                                <p className='item-desc'>{item.get('desc')}</p>
                                <div className='item-meta'>
                                    <Link className="item-nickname" to="/">
                                        {item.get('author')}
                                    </Link>
                                    <Link className="item-comments" to="/">
                                        <i className='iconfont'>&#xe601;</i>{item.get('comments')}
                                    </Link>
                                    <Link className="item-stars" to="/">
                                        <i className='iconfont'>&#xe607;</i>{item.get('stars')}
                                    </Link>
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