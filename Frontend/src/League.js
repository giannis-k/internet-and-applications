import React, { Component } from 'react';
import LeagueTable from './LeagueTable';

class League extends Component {

  constructor(props) {
    super(props);

    this.state = {
		Errors: null,
		results: null,
	};
  }

  render() {
  	if(!this.state.results)
	{
	  	fetch('http://localhost:8080/LeagueTable')
	  	.then((response) => {
	  		if(!response.ok) {
	  			this.setState({
	  				Errors: 'An error occured',
	        	});
	  		}
	  		else {
	  			return response.json();
	  		}
	  	})
		.then((json) => {
			this.setState({
				results: json,
			});
		})
		.catch((error) => {
			console.error(error);
		});
	}

    if (this.state.Errors) {
      return <div className="center">{this.state.Errors}</div>;
    }
    else {
    	return <div>{<LeagueTable results={this.state.results}/>}</div>;
    }
  }
}

export default League;