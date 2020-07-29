import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import India from './indiacard'
import Chartactive from './chartactive'
import Chartconfirmed from './chartconfirmed'
import Chartdeceased from './chartdeceased'

let calculate=(data)=>{
    let active=0
    Object.entries(data).map((t,k) =>{ 
        active=active+t[1].active+t[1].deceased+t[1].recovered+t[1].confirmed        
    })
    return active
}

let active=(data)=>{
    let active=0
    Object.entries(data).map((t,k) => 
        active=active+t[1].active
    )
    return active
}

let confirmed=(data)=>{
    let active=0
    Object.entries(data).map((t,k) => 
        active=active+t[1].confirmed
        
    )
    return active
}

let deceased=(data)=>{
    let active=0
    Object.entries(data).map((t,k) => 
        active=active+t[1].deceased
        
    )
    return active
}

let recovered=(data)=>{
    let active=0
    Object.entries(data).map((t,k) => 
        active=active+t[1].recovered
        
    )
    return active
}


let risk=(data)=>{
    let active=0
    Object.entries(data).map((t,k) => 
        active+=t[1].active
        
    )
    if(active>5000){
        return <b className="text-danger">SEVERE</b>;
    }
    else if(active<5000&&active>1000){
        return <b className="text-warning">MODERATE</b>;
    }
    if(active<1000){
        return <b className="text-success">LOW</b>;
    }
    

}

export default class Home extends Component{
    
    componentDidMount(){
        let iterator = fetch("https://api.covid19india.org/state_district_wise.json");

        iterator
        .then(response => response.json())
        .then(post => this.setState({countrylist: post}));
    }

    componentWillUnmount=()=>{
        this.setState({countrylist:null})
    }   
    
    
    constructor(props){
        super(props);
        this.state={
            countrylist:[],
            filtered:[]
        }
           
    }
    render(){

        return(
            <>
            <India data={this.state.countrylist} ></India>
            <div class="panel col-md-12 shadow-lg p-3 mb-5 bg-white rounded">
            <div class="table-bordered table-responsive text-center ">
                    <table class="table  table-hover">
            
                    <thead class="table-dark">
                        <tr>
                        <th scope="col" >#</th>
                        <th scope="col" >State & Union Territories</th>
                        <th scope="col">Confirmed</th>
                        <th scope="col">Active</th>
                        <th scope="col">Deceased</th>
                        <th scope="col">Recovered</th>
                        <th scope="col">Risk</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             Object.entries(this.state.countrylist).map((t,k) => 
                             {
                                if(k!=0)
                                {
                                return(
                                <tr>
                                    <th scope="row">{k}</th>
                                    <td className="text-secondary"><Link to={"/"+t[0]+"/"+k}><b><u>{t[0]}</u></b></Link></td>
                                    <td className="text-muted"><b>{confirmed(t[1].districtData)}</b></td>
                                    <td className="text-warning"><b>{active(t[1].districtData)}</b></td>
                                    <td className="text-danger"><b>{deceased(t[1].districtData)}</b></td>
                                    <td className="text-success"><b>{recovered(t[1].districtData)}</b></td>
                                    <td >{risk(t[1].districtData)}</td>
                                </tr>)
                            }}
                             )       
                        }
                    </tbody>
                </table>         
            </div>
            </div>
            <div class="shadow-lg p-3 mb-5 bg-white rounded"><Chartconfirmed /></div>
            <div class="shadow-lg p-3 mb-5 bg-white rounded"><Chartactive /></div>
            <div class="shadow-lg p-3 mb-5 bg-white rounded"><Chartdeceased /></div>
            

            </>
        )
    }
}