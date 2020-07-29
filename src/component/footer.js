import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import heart from'../heart.png'
export default class Navbar extends Component{
    render(){
        return(
            <>
                <foot class="page-footer font-small blue">

                <div class="footer-copyright text-center py-3">©2020 Covid Tracker:
                <> Made By aaavertos</> 
                <img src={heart} height="20px" style={{margin:'5px' }}></img>
                <a href="https://github.com/aalaprawat" target="_blank" class ="text-primary">
                ©copyright: indiacorona.live
                </a>
                </div>
                </foot>         
            </>
        )
    }
}