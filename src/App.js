import React ,{Component} from "react";
import {connect} from "react-redux";
import {addGun,removeGun,addGunSync} from "./reducer";  //引进方法
import {Button,WingBlank,WhiteSpace} from 'antd-mobile';  // 加载 JS
//import 'antd-mobile/lib/Button/style/css';        // 加载 CSS
//import 'antd-mobile/dist/antd-mobile.css'
//import 'antd-mobile/lib/WhiteSpace/style/css';        // 加载 CSS

//state有两张表  所以指明引counter

@connect(
    (state)=>{
        return {
            num:state.counter     
        }
    },
    {
        addGun,removeGun,addGunSync
    }
)
class App extends Component{

    render(){
        return(
            <div>
               <WingBlank>
                <h1>现在有机关枪{this.props.num}把</h1>
                <WhiteSpace></WhiteSpace>
                <Button type="primary" onClick={()=>{this.props.addGun()}}>加机关枪</Button>
                <Button type="warning" onClick={this.props.removeGun}>减机关枪</Button>  
               </WingBlank>
            </div>   
        )
    }
}

export default App;





