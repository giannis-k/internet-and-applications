import React, { Component } from 'react';
var shortid = require('shortid');

class CardsTable extends Component {

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
	                <th scope="col">Yellow Cards</th>
	                <th scope="col">Red Cards</th>
	              </tr>
	            </thead>
	            <tbody>
	            {this.props.results.map(item => (
	              <tr key={shortid.generate()}>
	                <td>{item.name}</td>
	                <td>{item.team}</td>
	                <td>{item.position}</td>
	                <td>{item.yellowcards}</td>
	                <td>{item.redcards}</td>
	              </tr>
	            ))}
	            </tbody>
	          </table>
	        </div>
      )
    }
    }
}

export default CardsTable;