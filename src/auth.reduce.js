
const LOGIN="登陆"
const LOGOUT="注销"

export function auth(state={isAuth:false,user:"李云龙"},action){     //state可作为个对象
	//reducer
	switch(action.type){
		case LOGIN:
		return {...state,isAuth:true}; //...展开state的所有内容  //{isAuth:true,user:"李云龙"}
		case LOGOUT:
		return {...state,isAuth:false};  //isAuth:false,user:"李云龙"}
		default: 
		return state;
	}
}

//action creater
export function login(){
	return {type:LOGIN}
}

export function logout(){
	return {type:LOGOUT}
}