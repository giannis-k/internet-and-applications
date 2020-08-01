import React, { Component } from 'react';
var shortid = require('shortid');

class GoalsTable extends Component {

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
	                <th scope="col">Name</th>
	                <th scope="col">Team</th>
	                <th scope="col">Position</th>
	                <th scope="col">Goals Scored</th>
	              </tr>
	            </thead>
	            <tbody>
	            {this.props.results.map(item => (
	              <tr key={shortid.generate()}>
	                <td>{item.name}</td>
	                <td>{item.team}</td>
	                <td>{item.position}</td>
	                <td>{item.goals}</td>
	              </tr>
	            ))}
	            </tbody>
	          </table>
	        </div>
      )
    }
    }
}

export default GoalsTable;