import React,{Component} from 'react'
import {LoginWrapper,LoginMain, LoginTitle,LoginItem,LoginForm} from './style'
import {connect} from 'react-redux'
import {changeRegistHover} from './store/actionCreators'

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleRegistMouseEnter = this.handleRegistMouseEnter.bind(this);
        this.handleRegistMouseLeave = this.handleRegistMouseLeave.bind(this);
        this.handleRegistClick = this.handleRegistClick.bind(this);
        this.handleLoginMouseEnter = this.handleLoginMouseEnter.bind(this);
        this.handleLoginMouseLeave = this.handleLoginMouseLeave.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }
    render() {
        const {hoverLogin,hoverRegist} = this.props;
        return (
            <LoginWrapper>
                <LoginMain>
                    <LoginTitle>
                        <LoginItem ref={element => { this.loginRef = element }} onClick={this.handleLoginClick}  onMouseEnter={this.handleLoginMouseEnter} onMouseLeave={this.handleLoginMouseLeave} className="active">
                            登录
                        </LoginItem>
                        <b>.</b>
                        <LoginItem ref={element => { this.registRef = element }} onClick={this.handleRegistClick}  onMouseEnter={this.handleRegistMouseEnter} onMouseLeave={this.handleRegistMouseLeave}>
                            注册
                        </LoginItem>
                    </LoginTitle>
                    <LoginForm>
                        <div>
                            <input className='input-user' placeholder="手机号或邮箱"></input>
                        </div>
                        <div>
                            <input className='input-password' placeholder="密码" type="password" ></input>
                        </div>
                    </LoginForm>
                </LoginMain>
            </LoginWrapper>
        )
    }
    
    handleRegistMouseEnter() {
        this.registRef.classList.add("hover");
    }
    handleRegistMouseLeave() {
        this.registRef.classList.remove("hover");
    }
    handleLoginMouseEnter() {
        this.loginRef.classList.add("hover");
    }
    handleLoginMouseLeave() {
        this.loginRef.classList.remove("hover");
    }
    handleRegistClick() {
        this.registRef.classList.add("active");
        this.loginRef.classList.remove("active");
    }
    handleLoginClick() {
        this.loginRef.classList.add("active");
        this.registRef.classList.remove("active");
        
    }

}
const mapState = (state)=> {
    return {
        hoverLogin:state.getIn(["login","hoverLogin"]),
        hoverRegist:state.getIn(["login","hoverRegist"])

    }
}
const mapDispatch = (dispatch)=> {
    return {
        handleLoginMouseEnter() {
            console.log("handleMouseEnter")
        },
        handleLoginMouseLeave() {
            console.log("handleMouseLeave")
        },
        handleRegistMouseEnter() {
            //dispatch(changeRegistHover(true));
            console.log("handleMouseEnter")
        },
        handleRegistMouseLeave() {
            //dispatch(changeRegistHover(false));
        },
        registItem(item) {
            console.info(item)
        }
    }
}
export default connect(mapState,null)(Login)