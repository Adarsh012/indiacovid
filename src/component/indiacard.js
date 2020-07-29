import React,{Component} from 'react';
import ind from '../india.jpg'
let total=0 
let totala=0 
let totalc=0 
let totalr=0 
let totald=0 



let indiatab=(data)=>{
    let active=0
    Object.entries(data).map((t,k) =>{ 
        active=active+t[1].active+t[1].deceased+t[1].recovered+t[1].confirmed
        totala=totala+t[1].active
        totalc=totalc+t[1].confirmed
        totalr=totalr+t[1].recovered
        totald=totald+t[1].deceased
        
    })
    total=total+active
}

let c1 = 0;
let c2="";
var date = [];
var result_confirmed = [];
export default class Indiacard extends Component{
        
    constructor(props){
        super(props);
    }

    componentWillUnmount(){
        total=0
        console.log(total)
    }

    componentDidUpdate(){
        total=0 
        totala=0 
        totalc=0 
        totalr=0 
        totald=0 

    }

    componentDidMount() {
        total=0 
        totala=0 
        totalc=0 
        totalr=0 
        totald=0 


    
        let b=[]
        const api_url = 'https://api.covid19india.org/states_daily.json';
        
        fetch(api_url)
        .then(response=>response.json())
        .then((data)=>
        {
            b = data["states_daily"]
            for(var i=0, j=0; i<b.length; i+=3,j++){
            date[j] = b[i]["date"];
            result_confirmed[j] = parseInt(b[i]["tt"])
            }
            c1 = result_confirmed[result_confirmed.length-1];
            c2 = date[date.length-1];
        })
        
        

    }

    

    render(){
        return(
            <>
                {
                    Object.entries(this.props.data).map((t,k) => 
                    {
                        
                        if(k!=0)
                        {
                         return   indiatab(t[1].districtData)
                        }
                    })

                }
                <div class="container text-center align-middle shadow-lg p-3 mb-5 bg-white rounded">
                    <div class="row align-middle text-center">
                        <div class="col-md-6 col-xs-12">
                            <img src={ind} width="100%"/>
                        </div>

                        <div class="col-md-6 text-center ">
                        <br/><br/><br/>
                            <h1 class="text-muted">India Corona Stats</h1>
                            <br/>
                            <h4 class="text-muted" >Total Cases: <b class="text-danger">{totalc}</b></h4>
                            <br/>
            <h4 class="text-muted">New Cases <b class="text-info">{c2}</b>:<b class="text-danger"> {c1}</b></h4>
            

                            
                        </div>
                    </div>
                </div>
                <br/>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3  shadow p-3 mb-5   bg-white rounded">
                            <div class="card" style={{padding: "10%" ,background: "linear-gradient(to left,#74ebd5, #ACB6E5)" ,padding:"10%"}}>
                                <p class="card-text text-white text-center"><h4>Confirm</h4></p>
                                <p class="card-text text-white text-center"><h3>{totalc}</h3></p>
                            </div>
                        </div>
                        <div class="col-md-3  shadow p-3 mb-5 bg-white rounded">
                            <div class="card " style={{background: "linear-gradient(to right, #A770EF,#CF8BF3,#FDB99B)" ,padding: "10%"}}>
                                
                                <p class="card-text text-white text-center"><h4>Active</h4></p>
                                <p class="card-text text-white text-center"><h3>{totala}</h3></p>
                            </div>
                        </div>
                        <div class="col-md-3 shadow p-3 mb-5 bg-white rounded">
                            <div class="card " style={{background: "linear-gradient(to right, #ff9966,#ff5e62)" ,padding: "10%"}}>
                                <p class="card-text text-white text-center"><h4>Death</h4></p>
                                <p class="card-text text-white text-center"><h3>{totald}</h3></p>
                            </div>
                        </div>
                        <div class="col-md-3 shadow p-3 mb-5 bg-white rounded">
                            <div class="card " style={{background: "linear-gradient(to right, #11998e,#38ef7d)",padding:"10%" }}>
                                <p class="card-text text-white text-center"><h4>Recover</h4></p>
                                <p class="card-text text-white text-center"><h3>{totalr}</h3></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

