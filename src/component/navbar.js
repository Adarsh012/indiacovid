import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import logo from'../logo.png' 
export default class Navbar extends Component{
    render(){
        return(
            <>
                <nav class="navbar navbar-expand-sm navbar-dark bg-dark rounded-bottom sticky-top  " style={{opacity:1}}>
                    <img src={logo} height="50px"></img>
                    <Link to="/" class="navbar-brand  mr-auto ml-auto" href="#"><h2 >India Covid19 Meter</h2></Link>
                </nav>         
            </>
        )
    }
}