import "../node_modules/todomvc-common/base.css"
import "../node_modules/todomvc-app-css/index.css"
import "../node_modules/todomvc-common/base.js"
import {add} from "./index"



class App extends Component{
	constructor(){
		super();
		this.state({
			todos:[]
		})
		this.hanDleKetDown(e)=this.hanDleKetDown(e).bind(this);
	}
	render(){
		return(
			<section class="todoapp">
			<header class="header">
				<h1>todos</h1>
				<input class="new-todo" value={this.state.list} onChange={this.onkeydown(e)} onKeyUp={hanDleKetDown(e)} placeholder="What needs to be done?"/>
			</header>
			<section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox"/>
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					<li key={index} class="completed">
						{todo.text}
					</li>
				</ul>
			</section>
			<footer class="footer">
				<span class="todo-count"><strong>0</strong> item left</span>
				<ul class="filters">
					<li>
						<a class="selected" href=" ">All</ a>
					</li>
					<li>
						< a href="#/active">Active</ a>
					</li>
					<li>
						< a href="#/completed">Completed</ a>
					</li>
				</ul>
				<button class="clear-completed">Clear completed</button>
			</footer>
		</section>
		)
		
	}
	hanDleKetDown(e){
		if(e.keycode==13){
			let val=e.target.value;
		}
		if(!val){
			return;
		}
		e.target.value="";
		this.state.todos.push({
			text:value,
			isDone:false
		})
		this.setState({
			this.state.todos
		})
	}
}
//
//export default App;




//
//
////()=>调用这个方法
//
//const mapStateToProps=(state)=>{
//	return{
//		num:state
//	}
//}
//当父的属性传进去
//const actionCreators={
//	addGun,
//	removeGun,
//	addGunSync
//}
//App=connect(mapStateToProps,actionCreators)(App)   //mapStateToProps要写在前面  动作写在后面