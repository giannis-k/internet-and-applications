import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class AssistsChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    this.Assists = [];
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
      this.Assists.push(results[j].assists);
    }
    
    this.ChartData = {
      labels: this.Players,
      datasets: [{
        label: 'Assists',
        data: this.Assists,
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
              text: 'Assists'
            },
            legend : {
              display: false,
            },
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Assists',
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

export default AssistsChart;