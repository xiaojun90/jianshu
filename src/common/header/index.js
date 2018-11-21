import React,{Fragment} from 'react'
import {HeaderWrapper,HeaderLimit,Logo,Navbar,NavbarItem,NavSearch,Adddition,Button,SearchWrapper,SearchInfo,SearchTrending,SearchTitle,SearchRefresh,SearchItems,SearchItem} from './style' 

import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import {actionCreators} from './store'; //这会导入store下的index.js
import {Link } from 'react-router-dom';

const getSearchList = (props) => {
    const {focused,list,page,totalPage,enterIn,handleMouseEnter,handleMouseLeave,handleRefresh} = props; //结构赋值
    if (focused || enterIn) {
        const pageList = [];
        const newList = list.toJS(); //需要把immutable对象转换成普通对象
        if (newList.length > 0) {
            for (let i = (page-1) * 10 ;i<page*10 && i < newList.length;i++) {
                pageList.push(
                    (
                        <SearchItem key={newList[i]}>{newList[i]}</SearchItem>
                    )
                )
            }
        }
        return (
            <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <SearchTrending>
                    <SearchTitle>热门搜索</SearchTitle>
                    {
                        //需要通过箭头函数传值
                    }
                    <SearchRefresh onClick={() => handleRefresh(page,totalPage)}><i className="iconfont">&#xe622;</i>换一批</SearchRefresh>
                </SearchTrending>
                <SearchItems>                   
                     {
                        pageList
                    }                                                                                
                </SearchItems>
            </SearchInfo>
        )
    } else {
        return null;
    }
};
const Header = (props)=> {
    const {list,focused, handleOnInputFocus,hadnleOnInputBlur} = props;
    return (
        <Fragment>
            <HeaderWrapper>
                <HeaderLimit>
                    <Link to="/">
                        <Logo></Logo>
                    </Link>
                    <Navbar>
                        <NavbarItem className="left active">首页</NavbarItem>
                        <NavbarItem className="left">下载App</NavbarItem>                       
                        <NavbarItem className="right">
                        <Link to="/login" className="login">登录</Link>
                        </NavbarItem>
                        <NavbarItem className="right">Aa</NavbarItem>
                        <CSSTransition
                            in={focused}
                            timeout={1500}
                            classNames="example"
                        >
                        <SearchWrapper className={focused ? 'focused':''}>                                
                            <NavSearch  onFocus={() => handleOnInputFocus(list)} onBlur={hadnleOnInputBlur}></NavSearch>
                            <i className={focused ? 'focused iconfont':'iconfont'}>&#xe605;</i>
                            {getSearchList(props)}                             
                        </SearchWrapper>
                        </CSSTransition>
                        
                    </Navbar>
                    <Adddition>                       
                        <Button className='write'><i className="iconfont">&#xe775;</i>写文章</Button>
                        <Button className='reg'>注册</Button>
                    </Adddition>
                </HeaderLimit>
            </HeaderWrapper>　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
        </Fragment> 
    );
}

const mapStateToProps = (state) => {
    return {
        focused :  state.getIn(['header','focused']),//等同于：state.get("header").get("focused")
        list: state.getIn(['header','list']),
        enterIn: state.getIn(['header','enterIn']),
        page: state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleOnInputFocus (list) {
            console.info(list);
            if (list.size === 0) {
                dispatch(actionCreators.getSearchListAction());
            }
            dispatch(actionCreators.searchFocusAction());     
        },
        hadnleOnInputBlur() {
            dispatch(actionCreators.searchBlurAction());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleRefresh(page,totalPage) {
            if (page == totalPage) {
                dispatch(actionCreators.refresh(1));
            } else {
                dispatch(actionCreators.refresh(page + 1));
            }
        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);