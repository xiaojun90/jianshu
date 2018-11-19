/**
 * 首页Banner
 * @author xiaojun
 */
import React,{Component} from 'react'
import {BannerWrapper} from '../style'

class Banner extends Component {
    render() {
        return (
            <BannerWrapper>
                <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4550/a4aba36241eb146c13892301e486417cbf16af18.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
            </BannerWrapper>
        )
    }
}

export default Banner;
