import React,{Component} from 'react'
import {LoginWrapper,LoginMain, LoginTitle,LoginItem,LoginForm,LoginRegist} from './style'
import {connect} from 'react-redux'
import {changeShowLoginForm} from './store/actionCreators'

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
        const {showLoginForm} = this.props;
        const getShowForm = ()=> {
            if (showLoginForm) {
                return (
                        <LoginForm>
                        <div>
                            <input className='input-user' placeholder="手机号或邮箱"></input>
                        </div>
                        <div>
                            <input className='input-password' placeholder="密码" type="password" ></input>
                        </div>
                        <div>
                            <button className='login-btn'>登录</button>
                        </div>
                    </LoginForm>
                )
            } else {
                return (
                    <LoginRegist>
                    <div>
                        <input className='input-user' placeholder="你的昵称"></input>
                    </div>
                    <div>
                        <input className='input-phonenumber' placeholder="手机号"></input>
                    </div>
                    <div>
                        <input className='input-password' placeholder="密码" type="password" ></input>
                    </div>
                    <div>
                        <button className='regist-btn'>注册</button>
                    </div>
                </LoginRegist>
                )
            }
        }
        
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
                    {
                        getShowForm()
                    }
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
        this.props.registClick();
    }
    handleLoginClick() {
        this.loginRef.classList.add("active");
        this.registRef.classList.remove("active");
        this.props.loginClick();
        
    }

}
const mapState = (state)=> {
    return {
        hoverLogin:state.getIn(["login","hoverLogin"]),
        hoverRegist:state.getIn(["login","hoverRegist"]),
        showLoginForm:state.getIn(['login',"showLoginForm"])

    }
}
const mapDispatch = (dispatch)=> {
    return {
        registClick() {
            dispatch(changeShowLoginForm(false));
        },
        loginClick() {
            dispatch(changeShowLoginForm(true));
        }
    }
}
export default connect(mapState,mapDispatch)(Login)