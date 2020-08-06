import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class GoalsChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    this.Goals = [];
    this.Players = [];

    let results=[];
    let i=0;

    if(this.props.Results.length > 10)
      i=10;
    else
      i=this.props.Results.length

    for(let j=0; j<i; j++)
      results.push(this.props.Results[j])

    for(let j=0; j<i; j++) {
      this.Players.push(results[j].name);
      this.Goals.push(results[j].goals);
    }
    
    this.ChartData = {
      labels: this.Players,
      datasets: [{
        label: 'Goals',
        data: this.Goals,
        backgroundColor: 'rgba(63,63,191,0.4)',
        borderColor: 'rgba(63,63,191,1)',
        borderWidth: 1
      }]
    };


    return (
      <div className="chart">
        <Bar
          data={this.ChartData}
          options = {{
            title: {
              display: true,
              text: 'Goals'
            },
            legend : {
              display: false,
            },
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Goals',
                },
                ticks: {
                  min: 0,
                },
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Player Name',
                }
              }]
            }
          }}
        />
      </div>
    );
  }

}

export default GoalsChart;