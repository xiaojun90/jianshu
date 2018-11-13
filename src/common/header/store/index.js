//通过index.js导出所有的js,那其它的js只要导入index就可以导入store下所有的js
import reducer from './reducer'
import * as constants from './constants'
import * as actionCreators from './actionCreators'

export {reducer,constants,actionCreators};