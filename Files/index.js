import React from 'react'
import ReactDom from 'react-dom'
import Form from './form';
import Text from './text';
import Composition from './composition';
//import Blog from './keys';

//import  Datas from './deepak';
//import Button from './event';
//import Condition from './condition';
//import Impo from './Components/ImportExport';
//import Con from './condition';
// import List from './list';
//import { getImageUrl } from './app';

// function Data() {
//   return (new Date().toLocaleTimeString());
// }
// function ticks(){
//   root.render(<Data />);
// }

// setInterval(ticks,1000);
// class Datas extends React.Component{
//   render(){
//     return(
//       this.props.date.toLocaleTimeString()
//     );
//   }
// }
// function ticks(){
//   root.render(<Datas date={new Date()}/>);
// }
// setInterval(ticks,1000);

// ReactDom.render(
//   <>
//   <Profile/>
//   <Gallery/>
//   </>,document.getElementById('root')
// )

// const element=Gallery();
// ReactDom.render(element,document.getElementById('root'));

// const root = ReactDom.createRoot(
//   document.getElementById('root')
// );
// root.render(element);
const root=ReactDom.createRoot(
  document.getElementById('root')
);
// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];

root.render(<Composition />);
