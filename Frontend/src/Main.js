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
        console.log(`Option selected:`, this.state.selectedOption);
        this.props.history.push('/'+this.state.selectedOption.value);
      }
    );
  };
  
  componentDidMount(){
		document.body.className="main";	
  }
  
  componentDidUpdate(){
		document.body.className="main";	
  }
  

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
            placeholder={'Select Statistic...'}
          />
        </div>
      </div>
    );
  }

}

export default Main;