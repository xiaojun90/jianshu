import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`

export const HomeLeft = styled.div`
    float: left;
    width: 640px;
    padding: 30px 0px 0px 15px;
    box-sizing: border-box;
`

export const HomeRight = styled.div`
    width : 280px;
    padding-top: 30px;
    margin-left: 40px;
    float: right;
    box-sizing: border-box;
`
//首页Banner
export const BannerWrapper = styled.div`
    width: 625px;
    height: 270px;
    margin-bottom: 35px;
    .banner-img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
    }
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

//******文章列表样式****** */

export const ListItem = styled.div`
    overflow: hidden;
    margin: 0 0 15px;
    padding: 15px 0px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    .item-info {
        width: 475px;
        float: left;
    }
    .item-img {
        float: right;
        width: 150px;
        height: 100px;
    }
    .item-title {
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: #969696;
        margin-bottom: 4px;
    }
    .item-desc {
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
    .item-meta {
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        color: #b4b4b4;
        a {
            margin-right: 10px;
            cursor: pointer;
        }
        .iconfont {
            font-size:12px;
            margin-right:3px;
        }
    }

`

//******文章列表样式****** */


//******右侧面板样式****** */
export const BoardWrapper = styled.div`

`
export const BoardItem = styled.a`
    display:block;
    height : 50px;
    margin-bottom: 10px;
    img {
        height: 50px;   
    }
`

//******右侧面板样式****** */

//******推荐作者样式****** */
export const AuthorsWrapper = styled.div`
    margin-top: 30px;
    font-size: 14px;
    color: #969696;
    overflow: hidden;
    .authors-header {
        height: 18px;
        line-height: 18px;
        margin-bottom:15px;
    }
    .title {
        float: left;
    }
    .refresh {
        display: inline-block;
        float: right;
    }
    
`

export const AuthorsItem = styled.div`

    margin-bottom: 15px;
    .item-content {
        display: inline-block;
        box-sizing: border-box;
        width: 225px;
        .name {
            padding-top: 5px;
            margin-right: 60px;
            font-size: 14px;
            display: block;
        }
        .comment {
            margin-top: 5px;
            font-size:12px;
        }
    }

    .authors-img {
        width: 48px;
        height: 48px;
        border-radius: 24px;
        margin-right: 10px;
        float: left;
    }

    .follow {
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
`

//******推荐作者样式****** */