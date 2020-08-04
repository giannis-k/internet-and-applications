import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
let _ = require('underscore');

class GoalsChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    this.yAxisData = [];

    let results=[];
    let i=0;

    if(this.props.Results.length > 10)
      i=10;
    else
      i=this.props.Results.length

    for(let j=0; j<i; j++)
      results.push(this.props.Results[j])

    this.ObjectLabels = _.groupBy(results, "name");
    this.Labels = Object.keys(this.ObjectLabels);

    for(let player of Object.keys(this.Labels)) {
      this.yAxisData.push(this.ObjectLabels[this.Labels[player]][0].goals);
    }
    
    this.ChartData = {
      labels: this.Labels,
      datasets: [{
        label: 'Goals',
        data: this.yAxisData,
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