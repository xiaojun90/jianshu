import React, { Component,Fragment } from 'react';
import Header from './common/header'
import {GlobalStyle} from './style.js'
import {IconFont} from './statics/iconfont/iconfont.js'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
class App extends Component {
  render() {
    return (
        <Fragment>
          <GlobalStyle></GlobalStyle>
          <IconFont></IconFont>
          
          <BrowserRouter>
           {
             //由于BrowserRouter只能有一个子元素，所以所有的Route用div包裹起来
             //exact表示准确匹配，如果不加exact的话，在/datail也会匹配到/，此时就会显示Home和Detail的内容。这显然是不对的。
           }
            <div>
              <Header></Header>
              <Route exact path="/" component = {Home}></Route>
              <Route path="/detail" component = {Detail}></Route>
            </div>
          </BrowserRouter>
        </Fragment>
    );
  }
}
export default App;
