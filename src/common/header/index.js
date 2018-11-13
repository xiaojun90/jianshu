import React,{Fragment} from 'react'
import {HeaderWrapper,HeaderLimit,Logo,Navbar,NavbarItem,NavSearch,Adddition,Button,SearchWrapper,SearchInfo,SearchTrending,SearchTitle,SearchRefresh,SearchItems,SearchItem} from './style' 

import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import {actionCreators} from './store'; //这会导入store下的index.js

const getSearchList = (show) => {
    if (show) {
        return (
            <SearchInfo>
                <SearchTrending>
                    <SearchTitle>热门搜索</SearchTitle>
                    <SearchRefresh><i className="iconfont">&#xe622;</i>换一批</SearchRefresh>
                </SearchTrending>
                <SearchItems>
                    <SearchItem>理财</SearchItem>
                    <SearchItem>理财</SearchItem>
                    <SearchItem>理财</SearchItem>
                    <SearchItem>理财</SearchItem>
                    <SearchItem>理财</SearchItem>
                    <SearchItem>理财</SearchItem>
                    <SearchItem>理财</SearchItem>
                    <SearchItem>理财</SearchItem>
                    <SearchItem>理财</SearchItem>
                    <SearchItem>理财</SearchItem>
                    <SearchItem>理财</SearchItem>
                    <SearchItem>理财</SearchItem>
                    <SearchItem>理财</SearchItem>
                    <SearchItem>理财</SearchItem>
                    <SearchItem>理财</SearchItem>
                    <SearchItem>理财</SearchItem>
                    <SearchItem>理财</SearchItem>
                    <SearchItem>理财</SearchItem>
                    <SearchItem>理财</SearchItem>
                </SearchItems>
            </SearchInfo>
        )
    } else {
        return null;
    }
};
const Header = (props)=> {
    return (
        <Fragment>
            <HeaderWrapper>
                <HeaderLimit>
                    <Logo></Logo>
                    <Navbar>
                        <NavbarItem className="left active">首页</NavbarItem>
                        <NavbarItem className="left">下载App</NavbarItem>                       
                        <NavbarItem className="right">登录</NavbarItem>
                        <NavbarItem className="right">Aa</NavbarItem>
                        <CSSTransition
                            in={props.focused}
                            timeout={1500}
                            classNames="example"
                        >
                        <SearchWrapper className={props.focused ? 'focused':''}>                                
                            <NavSearch  onFocus={props.handleOnInputFocus} onBlur={props.hadnleOnInputBlur}></NavSearch>
                            <i className={props.focused ? 'focused iconfont':'iconfont'}>&#xe605;</i>
                            {getSearchList(props.focused)}                             
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
        focused :  state.getIn(['header','focused'])//等同于：state.get("header").get("focused")
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleOnInputFocus () {
            dispatch(actionCreators.searchFocusAction());
        },
        hadnleOnInputBlur() {
            dispatch(actionCreators.searchBlurAction());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);