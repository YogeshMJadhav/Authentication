import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "ivisionbosspos.auth0.com",
        clientID: "KxJW4BptTib0ZNiu62RE4yM1bAHAl3rg",
        redirectUri: "https://localhost:3000/callback",
        audience: "ivisionbosspos.auth0.com/userInfo",
        responseType: "token id_token",
        scope: "openid" 
    })

    constructor(){
        this.login =this.login.bind(this);
    }

    login(){
        this.auth0.authorize();
    }
}