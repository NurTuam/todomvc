import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//let a=1;
//JSX 语法糖

//遍历
//let arr=[1,2,54235,425,423,11];
//let arrelement=arr.map((item,index)=>{
//	return  <li key={index}>{item}</li>
//})

//定义组件  1.函数
//function Elerer(props){    //函数名首要大写
//	if(Math.random()>0.5){
//		return <h1>怎么可能{props.name}</h1>;
//	}else{
//		return <h1>为什么{props.age}</h1>;
//	}
//}

//2.类定义组件
//class Welcome extends React.Component{
//	render(){
//		return <h1>分312e{this.props.name}</h1>
//	}
//}

//时间
//class Clock extends React.Component{
//	constructor(){
//		super();
//		this.state={
//			time:new Date().toLocaleTimeString(),
//			name:"长大"
//		};
//		this.changeHandle=this.changeHandle.bind(this);
//	}
//	interval(){
//		this.setState({
//			time:new Date().toLocaleTimeString()
//		})
//	}
//	componentDidMount(){
//		setInterval(()=>{
//			this.interval()
//		},1000)
//	}
//	render(){
//		return (
//			<div>
//              <h1>{this.state.time}</h1>
//              <h2>TODOMVC</h2>
//              <form>
//                  <input type="text" value={this.state.name} onChange={this.changeHandle}/>
//              </form>
//          </div>
//		)
//	}
//	changeHandle(e){
//		this.setState({
//			name:e.target.value
//		})
//	}
//}

//const scaleName={
//	c:"Celsius",
//	f:"fahrenheit"
//};
//
//function BollingVerdict(props){
//	if(props.celsius>=100){
//		return <p>水会烧开</p>
//	}else{
//		return <p>水不会烧开</p>
//	}
//}
//
//class TemperatureInput extends React.Component{
//	constructor(){
//		super();
//		this.state={temperature:""};
//		this.changeHandle=this.changeHandle.bind(this);
//	}
//	changeHandle(e){
//		this.setState({
//			temperature:e.target.value
//		});
//	}
//	render(){
//		const temperature=this.state.temperature;
//		const scale=this.props.scale;
//		return(
//			<fieldset>
//			<legend>输入{scaleName[scale]}</legend>
//			<input type="text" value={temperature} onChange={this.changeHandle}/>
//			</fieldset>
//		)
//		
//	}
//}
//
//class Calculator extends React.Component{
//	render(){
//		return(
//			<div>
//			<TemperatureInput scale="c"></TemperatureInput>
//			<TemperatureInput scale="f"></TemperatureInput>
//			</div>
//		)
//	}
//}
//const element=<h1>{arrelement}</h1>;

//const scaleName={
//	c:"Celsius",
//	f:"fahrenheit"
//};
//
//function BollingVerdict(props){
//	if(props.celsius>=100){
//		return "水烧开了"
//	}else{
//		return "水没了还来？"
//	}
//}
//
////把华氏度 摄氏度互换
//function toCelsius(fahrenheit){
//	return (fahrenheit-32)*5/9;
//}
//function toFahrenheit(celsius){
//	return (celsius*9/5)+32;
//}
//
//function tryConvert(temperatrue,convert){
//	const input=parseFloat(temperatrue);  //输入
//	if(Number.isNaN(input)){
//		return ""
//	}
//	const output=convert(input);   //输出
//	const ronded=Math.round(output*1000)/1000;
//	return ronded.toString();
//}
//
//class TemperatureInput extends React.Component{
//	constructor(props){
//		//props: 只读
//		super(props);
//		this.state={temperature:""};
//		this.changeHandle=this.changeHandle.bind(this)
//	}
//	render(){
//		const temperature=this.props.temperature;   //之前为state各个组件独立保存的状态  现在统一由父组件传入
//		const scale=this.props.scale;
//		return(
//			<fieldset>
//			<legend>输入一个{scaleName[scale]}温度</legend>
//			<input type="text" value={temperature} onChange={this.changeHandle}/>
//			</fieldset>
//		)
//	}
//	changeHandle(e){
//		this.props.onTemperatureChange(e.target.value)
//	}
//}
//
//class Calculator extends React.Component{
//	constructor(){
//		super();
//		this.state={
//			temperature:'',
//			scale:"c"
//		};
//		this.handleFahrenheitChange=this.handleFahrenheitChange.bind(this);
//		this.handleCelsiusChange=this.handleCelsiusChange.bind(this);
//	}
//	handleFahrenheitChange(temperature){
//		this.setState({
//			temperature:temperature,
//			scale:"f"
//		})
//	}
//	handleCelsiusChange(temperature){
//		this.setState({
//			temperature:temperature,
//			scale:"c"
//		})
//		
//	}
//	render(){
//		const scale=this.state.scale;
//		const temperature=this.state.temperature;
//		const celsius=scale=="f"?tryConvert(temperature,toCelsius):temperature;
//		const fahrenheit=scale=="c"?tryConvert(temperature,toFahrenheit):temperature;
//		return(
//			//只能有一个根节点
//			<div>
//			   <TemperatureInput scale="c" onTemperatureChange={this.handleCelsiusChange} temperature={celsius}/>
//			   <TemperatureInput scale="f" onTemperatureChange={this.handleFahrenheitChange} temperature={fahrenheit}/>
//			   <BollingVerdict celsius={celsius}/>
//			</div>
//		)
//	}
//}
//


//todoMVC
//1.展示数据
//const 	KET_DOWM=13;
//class Add extends React.Components{
//	constructor(){
//		super();
//		this.state={
//			list:[],
//			add:"",
//		}
//	}
//	render(){
//		const additem=this.state.add;
//		if(additem){
//			this.props.add(val)
//			this.setState({
//				add:""
//			})
//		}
//		return(
//			<header class="header">
//				<h1>todos</h1>
//				<input class="new-todo" value={this.state.list} onChange={this.onkeydown(e)} onKeyDown={this.changeHandle(e)} placeholder="What needs to be done?"/>
//			</header>
//		)
//	}
//	onkeydown(e){
//		if(!e.target.value){
//			return;
//		}
//		if(e.target.value!==KET_DOWM){
//			return;
//		}
//		
//	}
//	changeHandle(e){
//		this.setState({
//			temperature:e.target.value
//		});
//	}
//	
//}

//function render(){
//		ReactDOM.render(<App><Add></Add></App>,document.getElementById('root'));
//}
//
//render();
//redux

//import {createStore,applyMiddleware,compose} from "redux"
//import {counter} from "./index.reduce"
//import {Provider} from "react-thunk"
//import thunk from "redux-thunk"


//reducer
//function reducer(state=0,action){
//	switch(action.type){
//	  case "加this":
//		return state+1;
//	  case "减this":
//	    return state-1;
//	  default :
//	    return 10;
//	    
//	    
//	}
//}
//
//
////store
//
//const store=createStore(reducer);
//const init=store.getState();
////console.log(init)
//
//store.subscribe(()=>{
//	const current=store.getState();
//	console.log(`有${current}ba`)
//});
//
//store.dispatch({
//	type:"加this"
//});
//store.dispatch({
//	type:"减this"
//});
//store.dispatch({
//	type:"加this"
//});
//store.dispatch({
//	type:"减this"	
//});

//import {createStore} from "redux"
//import {counter,addGun,removeGun} from "./index.reduce"

//const store=createStore(counter,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
////function render(){
//	ReactDOM.render(<Provider store={store}>
//                      <App></App>
//              </Provider>,document.getElementById('root'));
//}

//store.subscribe(render);
//render();


import {createStore,applyMiddleware,compose} from "redux"  //为了加载 合并中间件
import reducer from "./reducers"
import thunk from "redux-thunk"   //处理异步的中间件
//import {counter,addGun,removeGun,addGunSync} from "./reducer"
//import App from "./App"
//import {counter} from "./reducer"
import {Provider} from "react-redux"  //为了更好连接 而建立最外层的组件
//

//import Auth from "./auth"
//import DashBoard from "./dashBoard"

import {BrowserRouter,Route,Link,Redirect,Switch} from "react-router-dom"

//const store=createStore(reducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
//
//function render(){
//	ReactDOM.render(<Provider store={store}><App></App></Provider>,document.getElementById('root'));
//}
//
//store.subscribe(render);
//
//render();

//react-router

//ReactDOM.render(<Provider store={store}>
//	<BrowserRouter>
//	     <div>
//	       <Switch>
//	          <Route path="/login" component={Auth}></Route>
//	          <Route path="/dashBoard" component={DashBoard}></Route>
//	          <Redirect to="/dashBoard"></Redirect>
//	       </Switch>
//	     </div>
//	</BrowserRouter>
//	</Provider>,document.getElementById('root'))


//项目搭建
import "./config"
import Login from "./container/login/login"
import Register from "./container/register/register"
import "./index.css"

const store=createStore(reducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render((
	<Provider store={store}>
	<BrowserRouter>
	<div>
	<Switch>
	<Route path="/login" component={Login}></Route>
	<Route path="/register" component={Register}></Route>
	</Switch>
	</div>
	</BrowserRouter>
	</Provider>),document.getElementById('root'));
