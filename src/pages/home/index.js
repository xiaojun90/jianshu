import React,{Component} from 'react'
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import Banner from './components/Banner'
import HotTopic from './components/HotTopic'
import List from './components/List'
import Board from './components/Board'
import Authors from './components/Authors'
import AppDown from './components/AppDown'
import {connect} from 'react-redux'
import {actionCreators} from './store'

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
                    <AppDown></AppDown>
                    <Authors></Authors>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.getHomeList();
    }

}

const mapDispatch = (dispatch)=> {
    return {
        getHomeList() {
            dispatch(actionCreators.getHomeList());
        }
    }
}

export default connect(null,mapDispatch)(Home);