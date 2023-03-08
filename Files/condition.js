// export default function Condition(){
//    return(
//     <Vue 
//     array={[1,2,3,4]}/>
//    );
// }

// function Vue({array}){
//     return(
//         <div>
//             <h1>
//                 Hello 
//             </h1>
            
//             {(array.length==0)?<h2>Welcome</h2>:<h2>Get Out</h2>}
//         </div>
//     )
// }
import React from 'react'
export default class Con extends React.Component{
    constructor(props){
        super(props);
        this.state={isLogged:true};
    }
     Avatar(){
        this.setState({isLogged:false});
        }
    
    Deleted(){
        this.setState({isLogged:true}
        );}  
    
    render(){
        const isLogged=this.state.isLogged;
        const Avatar=this.state.isLogged;
        const Deleted=this.state.isLogged;
        return(<div>
            <h1>
                Hello
            </h1>
            {
                (isLogged)?<Avatar/>:<Deleted/>
            }

            if(isLogged){
                alert('welcome to my page')
            }
        </div>);
    }
}