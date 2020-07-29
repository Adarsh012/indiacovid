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
            var result_deceased = [];
            var date_deceased = [];
            for(var i=2,j=0; i<b.length; i+=3,j++){
                date_deceased[j] = b[i]["date"];
                result_deceased[j] = parseInt(b[i]["tt"])
            }
            this.setState({
                labels:date_deceased,
                data:result_deceased
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
                        label: "Daily Deaths",
                        data:this.state.data,
                        fill: false,
                        backgroundColor: "red"
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            stepSize : 1000
                        }
                    }]
                },
                title:{
                    display:true,
                    text:'Deceased Cases'
                    
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