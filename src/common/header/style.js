import styled from 'styled-components'
import logo from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`

export const AmacheDiv = styled.div`
    background: #ea6f5a;
    width:100px;
    &.example-enter {
        width:100px;
      } 
    &.example-enter-active {
        transition: all 1500ms ease-in;
        width:200px;
    }
      
    &.example-leave {
        
    }
      
    &.example-leave-active {
        transition: all 1500ms ease-in;
    }
`

export const HeaderLimit = styled.div`
    margin:0 auto;
    max-width:1440px;
    min-width:768px;
    position: relative;
`

export const Logo = styled.a.attrs({
    href:'/'
})`
    position: absolute;
    left: 0;
    top: 0;
    background: url('${logo}');
    width: 100px;
    height: 56px;
    display: block;
    background-size: contain;    
`

export const Navbar = styled.div`
    width: 948px;
    margin: 0 auto;
`

export const NavbarItem = styled.div` 
    line-height:56px;
    padding:0 15px;
    margin-right:15px;
    &.active {
        color: #ea6f5a;
    }
    &.left {
        float : left;
        font-size: 17px;
           
    }
    &.right {
        float : right;
        color:#969696;
    }
    &.login {
        font-size : 15px;
    }
`
export const SearchWrapper = styled.div`
    
    box-sizing: border-box;
    position:relative;
    margin-left: 200px;
    margin-top:9px;
    width:300px;
    .iconfont {
        position:absolute;
        top: 0px;
        right: 5px;
        height:30px;
        width:30px;
        margin-top:14px;
        padding: 0px 10px;
        line-height:30px;
        border-radius: 15px;
        box-sizing: border-box;
        &.focused {
            background:#969696;
        }
    }
    &.focused {
        width:400px;
    }
    &.example-enter {
        transition: all 1500ms ease-in;
      } 
    &.example-enter-active {
        width:400px;
    }
      
    &.example-exit {
        transition: all 1500ms ease-out;
    }
      
    &.example-exit-active {
        width:300px;
    }
    
`;

export const SearchInfo = styled.div`
    position: absolute;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background-color: #fff;
    width:250px;
    margin-top:10px;
    padding:15px;
`
export const SearchTrending = styled.div`
    display: block;
    font-size: 14px;
    color: #969696;
`

//热门搜索
export const SearchTitle = styled.a`
    float : left;
`

//换一批
export const SearchRefresh = styled.a`
    float : right;
    .iconfont {
        position: inherit;
        padding: 0 3px;
    }
`

export const SearchItems = styled.div`
    margin-top: 25px;
    color: #787878;
    font-size: 12px;
`
export const SearchItem = styled.span`
    display: inline-block;
    border: 1px solid #eee;
    padding:2px 6px;
    margin-right: 10px;
    margin-bottom: 10px;
`

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`  
    width:100%;    
    height:38px;
    margin-top:9px;
    border-radius: 19px;
    border:none;
    outline: none;
    background: #eee;
    padding:0 40px 0 20px;
    box-sizing: border-box;
    
`

export const Adddition = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
`

export const Button = styled.a`
    height:38px;
    line-height:38px;
    display:block;
    float:right;
    margin-left:15px;
    margin-top: 9px;
    border: 1px solid rgba(236,97,73,.7);
    padding:0 15px;
    border-radius: 19px;
    &.reg {
        color:#ea6f5a;
        padding:0 25px;
    }
    &.write {
        background: #ea6f5a;
        color: #fff;
        .iconfont {
            margin-right:5px;
        }
    }
`