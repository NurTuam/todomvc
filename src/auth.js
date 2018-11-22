import React from "react"
import {Button} from "antd-mobile"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {login} from "./auth.reduce"


//ES6
@connect(
	(state)=>{
		return state.auth   
	},{login}
)
class Auth extends React.Component{
	render(){
		return(
			<div>
			{this.props.isAuth?<Redirect to="/dashBoard"/>:null}
			<h2>你没有权限,需要登陆</h2>
			<Button type="primary" onClick={this.props.login}>Login</Button>
			</div>
		)
	}
}

export default Auth
