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
    
`