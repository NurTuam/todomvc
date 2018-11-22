import React from "react"
import {Button} from "antd-mobile"
import {connect} from "react-redux"
import {Redirect,Link,Route} from "react-router-dom"
import {logout} from "./auth.reduce"
import App from "./App"


function Qibinglian(){
	return <h2>骑兵连</h2>
}


function erlian(){
	return <h2>二连</h2>
}

@connect(
	state=>state.auth,
	{logout}
)
class dashBoard extends React.Component{
	render(){
		return(
			<div>
			{this.props.isAuth?null:<Redirect to="/login"/>}
		<ul>
		 <li>
		   <Link to="/dashBoard">一营</Link>
		 </li>
		 <li>
		   <Link to="/dashBoard/erying">二营</Link>
		 </li>
		 <li>
		   <Link to="/dashBoard/qibinglian">骑兵连</Link>
		 </li>
		 </ul>
		 <Route exact path="/dashBoard" component={App}></Route>  
		 <Route path="/dashBoard/erying" component={erlian}></Route>
         <Route path="/dashBoard/qibinglian" component={Qibinglian}></Route>
         <Button type="primary" onClick={this.props.logout}>Logout</Button>
		</div>
		)
	}
}

export default dashBoard