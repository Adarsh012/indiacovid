import React, { Component } from 'react'
import Chart from "chart.js";
let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineGraph extends Component {
    chartRef = React.createRef();
    

    constructor(props){
        super(props);
        this.state={
            data:[],
            labels:[]
        }
    }
    
    
    componentDidMount() {
        this.buildChart();
    
        let b=[]
        const api_url = 'https://api.covid19india.org/states_daily.json';
        
        fetch(api_url)
        .then(response=>response.json())
        .then((data)=>
        {
            b = data["states_daily"]
            var result_confirmed = [];
            var date_confirmed = [];
            for(var i=0, j=0; i<b.length; i+=3,j++){
            date_confirmed[j] = b[i]["date"];
            result_confirmed[j] = parseInt(b[i]["tt"])
            }
            this.setState({
                labels:date_confirmed,
                data:result_confirmed
            })
        })
        

    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "bar",
            options: {
                responsive: true,
            },
            data: {
                labels: this.state.labels,
                datasets: [
                    {
                        label: "Daily Confirmed",
                        data:this.state.data,
                        fill: false,
                        backgroundColor: "#FFFF00"
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                             stepSize : 15000
                        }
                    }]
                },
                title:{
                    display:true,
                    text:'Confirmed Cases'
                   
                },
            }
    });
}
render() {
        return (
            <div className="container">
                <canvas
                    id="myChart"
                    style={{
                        height:"100%",
                        width:"100%"
                    }}
                    ref={this.chartRef}
                />
            </div>
        )
    }
}