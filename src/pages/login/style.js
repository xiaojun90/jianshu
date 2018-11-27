import styled from 'styled-components'
export const LoginWrapper = styled.div`
    height: 100%;
`

export const LoginMain = styled.div`
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`

export const LoginTitle = styled.h3`
    text-align: center;
    color: #969696;
    margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    b {
        padding: 10px;
    }
`

export const LoginItem = styled.div`
    display: inline-block;
    cursor: pointer;
    font-weight: 700;
    padding: 10px;
    &.active {
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
    }
    &.hover {
        border-bottom: 2px solid #ea6f5a;
    }
    
`

export const LoginForm = styled.div`
    border-radius: 4px;
    input {
        width: 100%;
        height: 50px;
        margin-bottom: 0;
        padding: 4px 12px 4px 35px;
        border: 1px solid #c8c8c8;
        background-color: hsla(0,0%,71%,.1);
        vertical-align: middle;
        box-sizing: border-box;
    }
    .input-user {
        border-bottom:none;
        border-radius: 4px 4px 0px 0px;
    }
    .input-password {    
        border-radius: 0 0 4px 4px;    
    }
    .login-btn {
        margin-top:20px;    
        height: 50px;
        width: 100%;
        border: none;
        border-radius: 25px;
        background: #3194d0;
        color: #fff;
        font-size: 18px;
    }
`

export const LoginRegist = styled.div`
    border-radius: 4px;
    input {
        width: 100%;
        height: 50px;
        margin-bottom: 0;
        padding: 4px 12px 4px 35px;
        border: 1px solid #c8c8c8;
        background-color: hsla(0,0%,71%,.1);
        vertical-align: middle;
        box-sizing: border-box;
    }
    .input-user {
        border-bottom:none;
        border-radius: 4px 4px 0px 0px;
    }
    .input-phonenumber {
        border-bottom:none;
    }
    .input-password {    
        border-radius: 0 0 4px 4px;    
    }
    .regist-btn {
        margin-top:20px;    
        height: 50px;
        width: 100%;
        border: none;
        border-radius: 25px;
        background: #3db922;
        color: #fff;
        font-size: 18px;
    }
`