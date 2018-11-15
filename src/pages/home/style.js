import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`

export const HomeLeft = styled.div`
    float: left;
    width: 640px;
    padding: 30 0 0 15px;
`

export const HomeRight = styled.div`
    width : 280px;
    margin-left: 40px;
    float: right;
    box-sizing: border-box;
`
//******热门专题样式****** */
export const TopicWrapper = styled.div`
    box-sizing: border-box;
    height : 104px;
    margin-bottom: 20px;
`

export const TopicItem = styled.a`
    height : 32px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    overflow: hidden;
    display: inline-block;
    box-sizing: border-box;
    margin: 0 18px 18px 0px;
    .topic-img {
        width: 32px;
        height: 32px;
        float: left;
    }
    .topic-content {
        height: 32px;
        line-height: 32px; 
        margin-left: 32px;
        padding: 0 10px;
    }
`

//******热门专题样式****** */