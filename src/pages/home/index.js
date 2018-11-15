import React,{Component} from 'react'
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import Banner from './components/Banner'
import HotTopic from './components/HotTopic'
import List from './components/List'
import Board from './components/Board'
import Authors from './components/Authors'

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Banner></Banner>
                    <HotTopic></HotTopic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Board></Board>
                    <Authors></Authors>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;