import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
let _ = require('underscore');

class CardsChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    this.yAxisDataYellow = [];
    this.yAxisDataRed = [];

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
      this.yAxisDataYellow.push(this.ObjectLabels[this.Labels[player]][0].yellowcards);
      this.yAxisDataRed.push(this.ObjectLabels[this.Labels[player]][0].redcards);
    }
    
    this.ChartData = {
      labels: this.Labels,
      datasets: [{
        label: 'Yellow Cards',
        data: this.yAxisDataYellow,
        backgroundColor: 'rgba(235, 232, 52, 0.5)',
        borderColor: 'rgba(235, 232, 52, 1)',
        borderWidth: 1
      },
      {
        label: 'Red Cards',
        data: this.yAxisDataRed,
        backgroundColor: 'rgba(230, 0, 0, 0.4)',
        borderColor: 'rgba(230, 0, 0, 1)',
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
              text: 'Cards'
            },
            legend : {
              display: false,
            },
            scales: {
              yAxes: [{
                stacked: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Cards',
                }
              }],
              xAxes: [{
                stacked: true,
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

export default CardsChart;