import React, { Component } from 'react';
var shortid = require('shortid');

class LeagueTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    if (!this.props.results) {
      return (
        <p></p>
      )
    }
    else {
      return (
	        <div id="span3" className="table-responsive -md">
	          <table className="table table-hover table-striped text-center">
	            <thead className="thead-dark">
	              <tr className="black">
	                <th scope="col">Team</th>
	                <th scope="col">Points</th>
	                <th scope="col">Wins</th>
	                <th scope="col">Draws</th>
	                <th scope="col">Losses</th>
	                <th scope="col">Goals Scored</th>
	                <th scope="col">Goals Conceded</th>
	              </tr>
	            </thead>
	            <tbody>
	            {this.props.results.map(item => (
	              <tr key={shortid.generate()}>
	                <td>{item.name}</td>
	                <td>{item.points}</td>
	                <td>{item.wins}</td>
	                <td>{item.draws}</td>
	                <td>{item.losses}</td>
	                <td>{item.goalsscored}</td>
	                <td>{item.goalsconceded}</td>
	              </tr>
	            ))}
	            </tbody>
	          </table>
	        </div>
      )
    }
    }
}

export default LeagueTable;