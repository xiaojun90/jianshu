import React,{Component} from 'react'
import {DetailWrapper,DetailTitle,DetailContent} from './style'
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <DetailTitle>
                    {this.props.title}
                </DetailTitle>
                <DetailContent dangerouslySetInnerHTML={{__html:this.props.content}}>
                </DetailContent>
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state)=> {
    return {
        "title":state.getIn(["detail","title"]),
        "content":state.getIn(["detail","content"])
    }
}
const mapDispatch =(dispatch)=> {
    return {
        getDetail(id) {
            dispatch(actionCreators.getDetailAction(id))
        }
    }
}

export default connect(mapState,mapDispatch)(Detail);