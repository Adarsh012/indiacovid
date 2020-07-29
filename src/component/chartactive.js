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
            var result_recovered = [];
            var date_recovered = [];
            for(var i=1,j=0; i<b.length; i+=3,j++){
                date_recovered[j] = b[i]["date"];
                result_recovered[j] = parseInt(b[i]["tt"])
            }
            this.setState({
                labels:date_recovered,
                data:result_recovered
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
                        label: "Daily Recovered",
                        data:this.state.data,
                        fill: false,
                        spanGaps: true,
                        backgroundColor: "green"
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            stepSize : 10000
                        }
                    }]
                },
                title:{
                    display:true,
                    text:'Recovered Cases',
                    
                },
            }
        }); 
}
render() {
        return (
                <div class="wrapper">
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