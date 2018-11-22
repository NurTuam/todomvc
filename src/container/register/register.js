import React from "react"
import Logo from "../../component/logo/logo"
import {WingBlank,WhiteSpace,List,Button,Radio,InputItem} from "antd-mobile"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {register} from "../../redux/user.redux"

@connect(
	state=>state.user,
	{register}
)
class Login extends React.Component{
	constructor(){
		super();
		this.state={
			user:'',
			pwd:'',
			repeatpwd:'',
			type:''
		}
		this.handleLogin=this.handleLogin.bind(this);
		this.handleRegister=this.handleRegister.bind(this);
	}
	handleLogin(){
		this.props.history.push('/login');
	}
	handleRegister(){	
         this.props.register(this.state);
	}
	handleChange(key,v){
		this.setState({
			[key]:v    //键记得加中括号 不加为字符串
		})
	}
	render(){
		const RadioItem=Radio.RadioItem;
		return(
			<div>
			{this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
			<Logo></Logo>
			<WingBlank>
			 <List>
			 {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
			 <InputItem onChange={(v)=>{this.handleChange('user',v)}}>用户</InputItem>
			 <InputItem type="password" onChange={(v)=>{this.handleChange('pwd',v)}}>密码</InputItem>
			 <InputItem type="password" onChange={(v)=>{this.handleChange('repeatpwd',v)}}>确认密码</InputItem>
			 <RadioItem  checked={this.state.type=='genius'} onChange={()=>this.handleChange('type','genius')}>牛人</RadioItem>
			 <RadioItem checked={this.state.type=='boss'} onChange={()=>this.handleChange('type','boss')}>BOSS</RadioItem>
			 </List>
			 <WhiteSpace></WhiteSpace>
			 <Button type="primary" onClick={this.handleRegister}>注册</Button>
			 <WhiteSpace></WhiteSpace>
			 <Button type="primary" onClick={this.handleLogin}>登录</Button>
			</WingBlank> 
			</div>
		)
	}
}

export default Login

