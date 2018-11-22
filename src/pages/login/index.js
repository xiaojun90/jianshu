import React,{Component} from 'react'
import {LoginWrapper,LoginMain, LoginTitle,LoginItem} from './style'
import {connect} from 'react-redux'

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    render() {
        return (
            <LoginWrapper>
                <LoginMain>
                    <LoginTitle>
                        <LoginItem onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave} className="active">
                            登录
                        </LoginItem>
                        <b>.</b>
                        <LoginItem onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.handleMouseLeave} ref={(item)=> {this.registItem = item}}>
                            注册
                        </LoginItem>
                        
                    </LoginTitle>
                </LoginMain>
            </LoginWrapper>
        )
    }

    handleMouseEnter() {
        console.log("handleMouseEnter");
    }
    handleClick() {
        console.log("handleClick");
    }
    handleMouseLeave() {
        console.log(this.registItem);
    }
}
const mapState = (state)=> {
    return {

    }
}
const mapDispatch = (dispatch)=> {
    return {
        handleMouseEnter() {
            console.log("handleMouseEnter")
        },
        handleMouseLeave() {
            console.log("handleMouseLeave")
        },
        registItem(item) {
            console.info(item)
        }
    }
}
export default connect(mapState,mapDispatch)(Login)