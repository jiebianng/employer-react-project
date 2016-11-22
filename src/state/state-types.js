
/**
 * 登录状态更改
 * @param state 状态值
 */

export function saveUserState(state) {
    window.localStorage.userStateStorage=state;
    let url = window.sessionStorage.userloginUrlStorage;
    if(url){
        window.location.href=url;
    }else {
        window.location.href='/';
    }
}

/**
 * 登录状态判定
 * @param url 需要跳转的界面
 */

export function getUserState(url) {
    const userState =  window.localStorage.userStateStorage;
    if(!userState){
        window.sessionStorage.userloginUrlStorage=url;
        window.location.href='/My/login';
    }
}

/**
 * 注销登录
 */

export function logoutUserState() {
    return () =>{
        window.localstorage.removeItem('userStateStorage');
    }
}