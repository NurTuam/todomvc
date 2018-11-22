export function getRedirectPath({type,avatar}){
	//注册=>登录=>完善信息（geniusinfo,bossinfo）=>用户(genius，boss)中心
	
	let url=(type=="boss")?"/boss":"genius";
	if(!avatar){
		url+='info'
	}
	return url;
}
