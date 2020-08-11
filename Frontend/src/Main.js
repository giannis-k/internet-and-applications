import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'LeagueTable', label: 'League Table' },
  { value: 'Appearances', label: 'Appearances'},
  { value: 'Goals', label: 'Goals'},
  { value: 'Assists', label: 'Assists'},
  { value: 'Cards', label: 'Cards'},
]

class Main extends Component {
  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => {
        this.props.history.push('/'+this.state.selectedOption.value);
      }
    );
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <div id="Mainpage" className="container-lg">
        <div className='text-center'>
          
        </div>
        <div className="main">
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            placeholder={'Select Statistic'}
          />
        </div>
      </div>
    );
  }

}

export default Main;