import React, { Component,Fragment } from 'react';
import Header from './common/header'
import {GlobalStyle} from './style.js'
import {IconFont} from './statics/iconfont/iconfont.js'
class App extends Component {
  render() {
    return (
        <Fragment>
          <GlobalStyle></GlobalStyle>
          <IconFont></IconFont>
          <Header></Header>
        </Fragment>
    );
  }
}
export default App;
