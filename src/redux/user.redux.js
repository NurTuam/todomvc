import axios from "axios"
import {getRedirectPath} from "../util"

const AUTH_SUCCESS="LOGIN"
const ERROR_MSG="ERROR_MSG"

const initState={
	user:'',
	pwd:'',
	type:'',//牛人或boss
	msg:'',
	redirectTo:''
}

export function user(state=initState,action){
	switch (action.type){
		case AUTH_SUCCESS:
		   return {...state,...action.payload,msg:"",redirectTo:getRedirectPath(action.payload)}
		case ERROR_MSG:
		   return {...state,msg:action.msg}
		default:
			return state;
	}
}

//写出去方便复用
function errorMsg(msg){
	return {type:ERROR_MSG,msg}
}

//action creater

function authSuccess(data){
	return {type:AUTH_SUCCESS,payload:data}
}

export function login({user,pwd}){
	if(!user || !pwd){
		return errorMsg("用户名或密码错误")
	}
	return dispatch=>{
		axios.post('/user/login',{user,pwd})
		.then(res=>{
			if(res.status==200&&res.data.code==0){
				dispatch(authSuccess(res.data.data))
			}else{
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}


export function register({user,pwd,repeatpwd,type}){
	if(!user || !pwd || !type){
		return errorMsg("用户名和密码必须输入")
	}
	if(pwd!==repeatpwd){
		return errorMsg("密码与确认密码不同")
	}
	return dispatch=>{
		axios.post('/user/register',{user,pwd,type}).then(res=>{
			if(res.status==200&&res.data.code==0){
				dispatch(authSuccess(res.data.data))
			}else{
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}
