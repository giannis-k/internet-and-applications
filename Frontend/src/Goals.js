import React, { Component } from 'react';
import GoalsTable from './GoalsTable';

const optionsPosition = [
	{ id: 1, value: 'All', label: 'All' },
	{ id: 2, value: 'Goalkeeper', label: 'Goalkeeper' },
	{ id: 3, value: 'Defender', label: 'Defender'},
	{ id: 4, value: 'Midfielder', label: 'Midfielder'},
	{ id: 5, value: 'Forward', label: 'Forward'},
]

const optionsTeam = [
	{ id: 1, value: 'All', label: 'All' },
	{ id: 2, value: 'AFC Bournemouth', label: 'AFC Bournemouth'},
	{ id: 3, value: 'Arsenal', label: 'Arsenal'},
	{ id: 4, value: 'Brighton & Hove Albion', label: 'Brighton & Hove Albion'},
	{ id: 5, value: 'Burnley', label: 'Burnley'},
	{ id: 6, value: 'Cardiff City', label: 'Cardiff City'},
	{ id: 7, value: 'Chelsea', label: 'Chelsea'},
	{ id: 8, value: 'Crystal Palace', label: 'Crystal Palace'},
	{ id: 9, value: 'Everton', label: 'Everton'},
	{ id: 10, value: 'Fulham', label: 'Fulham'},
	{ id: 11, value: 'Huddersfield Town', label: 'Huddersfield Town'},
	{ id: 12, value: 'Leicester City', label: 'Leicester City'},
	{ id: 13, value: 'Liverpool', label: 'Liverpool'},
	{ id: 14, value: 'Manchester City', label: 'Manchester City'},
	{ id: 15, value: 'Manchester United', label: 'Manchester United'},
	{ id: 16, value: 'Newcastle United', label: 'Newcastle United'},
	{ id: 17, value: 'Southampton', label: 'Southampton'},
	{ id: 18, value: 'Tottenham Hotspur', label: 'Tottenham Hotspur'},
	{ id: 19, value: 'Watford', label: 'Watford'},
	{ id: 20, value: 'West Ham United', label: 'West Ham United'},
	{ id: 21, value: 'Wolverhampton Wanderers', label: 'Wolverhampton Wanderers'},
]


class Goals extends Component {

		constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			Statistic: 'Goals',
			Position: null,
			Team: null,
			Errors: null,
			Results: [],
			isSubmitted: false,
		};
	}

		handleChange (event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			isSubmitted: false,
			Errors: null,
			[name]: value
		});
	};

	handleSubmit(e) {
		/* Prevents browser from reloading page */
		e.preventDefault();

		const Statistic = this.state.Statistic;
		const Position = this.state.Position;
		const Team = this.state.Team;

		console.log('Submitting...', Statistic, Position, Team);

		fetch('http://localhost:8080/'+Statistic+'/'+Team+'/'+Position)
		.then((response) => {
			console.log(response.status, response.statusText);
			if (!response.ok) {
				this.setState({
					Errors: 'An error occured',
				});
			}
			else {
				return response.json();
			}
		})
		.then(json => {
			//console.log(json);
			this.setState({
				Results: json,
				isSubmitted: true,
			});
		})
		.catch((error) => {
			console.error(error);
		});
	}

	componentDidUpdate() {
		document.body.className="query";
	}

	createSelect(selectedOption) {
		const arrayOfData = selectedOption;
		return arrayOfData.map((data) =>
			<option
			key={data.id}
			value={data.value}
			>
			{data.label}
			</option>

		);
	}

	render() {
		const Errors = this.state.Errors;

	    if (this.state.Errors) {
      		return <div className="center">{Errors}</div>;
    	}

    	else {
    		return (
				<div className="container-lg">
				<form className="was-validated" onSubmit={this.handleSubmit}>

				<div className=''>
				<h2>Choose Team and Position</h2>
				</div>

				<div id="Team">
					<div className="form-row">
						<div className="form-group col-md-6">
							<label htmlFor="validationDefault05">Team</label>
							<select required className="custom-select" name="Team" value={this.state.Team} onChange={this.handleChange}>
								<option disabled selected value> -- Select Team -- </option>
								{this.createSelect(optionsTeam)}
							</select>
							<div className="invalid-feedback">Please select a team</div>
						</div>
					</div>
				</div>

				<div id="Position">
					<div className="form-row">
						<div className="form-group col-md-6">
							<label htmlFor="validationDefault05">Team</label>
							<select required className="custom-select" name="Position" value={this.state.Position} onChange={this.handleChange}>
								<option disabled selected value> -- Select Position -- </option>
								{this.createSelect(optionsPosition)}
							</select>
							<div className="invalid-feedback">Please select a position</div>
						</div>
					</div>
				</div>

				<button className="btn btn-primary" type="submit">Search</button>
				</form>
				<br />
				<div>
					<div>
						{this.state.isSubmitted && <GoalsTable results={this.state.Results}/>}
					</div>
				</div>
				</div>
    		);
    	}
	}
}

export default Goals;