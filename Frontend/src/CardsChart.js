import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class CardsChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    this.YellowCards = [];
    this.RedCards = [];
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
      this.YellowCards.push(results[j].yellowcards);
      this.RedCards.push(results[j].redcards);
    }
    
    this.ChartData = {
      labels: this.Players,
      datasets: [{
        label: 'Yellow Cards',
        data: this.YellowCards,
        backgroundColor: 'rgba(235, 232, 52, 0.5)',
        borderColor: 'rgba(235, 232, 52, 1)',
        borderWidth: 1
      },
      {
        label: 'Red Cards',
        data: this.RedCards,
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