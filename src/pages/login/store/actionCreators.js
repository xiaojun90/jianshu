
import * as constants from './constants'

export const changeRegistHover = (hoverRegist) => {
    return {
        type:constants.CHANGE_HOVER_REGIST,
        hoverRegist
    }
}

export const changeShowLoginForm = (showLoginForm) =>({
    type:constants.CHANGE_SHOW_LOGIN_FORM,
    showLoginForm
})