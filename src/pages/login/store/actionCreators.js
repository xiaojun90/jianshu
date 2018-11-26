
import * as constants from './constants'

export const changeRegistHover = (hoverRegist) => {
    return {
        type:constants.CHANGE_HOVER_REGIST,
        hoverRegist
    }
}