/**
 * 右侧面板
 * @author xiaojun
 */
import React,{Component} from 'react'
import {BoardWrapper,BoardItem} from '../style'
import { connect } from 'react-redux';
class Board extends Component {
    render() {
        const {list} = this.props;
        return (
            <BoardWrapper>
                {
                    list.map((item) => (
                        <BoardItem href='' key={item.get("id")}>
                            <img alt="" src={item.get("imgUrl")}></img>
                        </BoardItem> 
                    ))
                }                                     
            </BoardWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list :  state.getIn(['home','boardList'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {            
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Board)