import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
let _ = require('underscore');

class AppearancesChart extends Component {

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

    this.xAxisTitle = 'Player Name';

    for(let j=0; j<i; j++)
      results.push(this.props.Results[j])

    this.ObjectLabels = _.groupBy(results, "name");
    this.Labels = Object.keys(this.ObjectLabels);

    for(let player of Object.keys(this.Labels)) {
      this.yAxisData.push(this.ObjectLabels[this.Labels[player]][0].appearances);
    }

    this.BackgroundColors = [];
    this.BorderColors = [];

    for (let j = 0; j < i; j++) {
      this.BackgroundColors.push('rgba(63,63,191,0.4)');
      this.BorderColors.push('rgba(63,63,191,1)');
    }
    
    this.ChartData = {
      labels: this.Labels,
      datasets: [{
        label: 'Appearances',
        data: this.yAxisData,
        backgroundColor: this.BackgroundColors,
        borderColor: this.BorderColors,
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
              text: "Appearances"
            },
            legend : {
              display: false,
            },
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Appearances',
                },
                ticks: {
                  min: 0,
                },
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: this.xAxisTitle,
                }
              }]
            }
          }}
        />
      </div>
    );
  }

}

export default AppearancesChart;