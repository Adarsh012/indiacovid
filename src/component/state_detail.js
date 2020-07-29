import React,{Component} from 'react';
import {Link} from 'react-router-dom'


export default class State_detail extends Component{
    
    
    componentDidMount(){
        let iterator = fetch("https://api.covid19india.org/state_district_wise.json");

        iterator
        .then(response => response.json())
        .then(post => this.setState({statelist: post}));
    }
    
    
    
    constructor(props){
        super(props);
        this.state={
            statelist:[],
            filtered:[],
            name:props.match.params.statename,
            id:props.match.params.stateid
        }
           
    }
    render(){

        return(
            <>
            <div className="container">
            <strong><Link to="/">HOME</Link></strong>
            
            <br/><br/>
            </div>
            <div class="panel shadow-lg p-3 mb-5 bg-white rounded">
            <div class="table-bordered table-responsive text-center ">
                    <table class="table">
                    <thead class="table-dark">
                        <tr>
                        <th scope="col" >#</th>
                        <th scope="col" >Districts</th>
                        <th scope="col">Confirmed</th>
                        <th scope="col">Active</th>
                        <th scope="col">Deceased</th>
                        <th scope="col">Recovered</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    {
                        Object.entries(this.state.statelist).map((key, i) => {
                            if(this.state.id==i){
                                return Object.entries(key[1].districtData).map((inner, j) => {
                                    if(j!=0)
                                    {
                                        return(
                                        <tr>
                                        <th scope="row">{j}</th>
                                        <td className="text-secondary"><b>{inner[0]}</b></td>
                                        <td className="text-orange"><b>{inner[1].confirmed}</b></td>
                                        <td className="text-warning"><b>{inner[1].active}</b></td>
                                        <td className="text-danger"><b>{inner[1].deceased}</b></td>
                                        <td className="text-success"><b>{inner[1].recovered}</b></td>
                                        </tr>
                                    )
                                    }
                                })
                            }
                        })       
                    }
                    </tbody>
                </table>
                </div>         
            </div>
            </>
        )
    }
}