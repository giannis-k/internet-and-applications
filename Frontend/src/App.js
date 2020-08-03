import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import Main from './Main';
import League from './League';
import Goals from './Goals';
import Assists from './Assists';
import Cards from './Cards';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      style: {
        backgroundColor:'#fff',
        height:'100vh'
      },
    };
  }

  renderComponent(Component) {
    return  (props) => <Component {...props} />;
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <div className="class_title">
              <h1>Premier League Statistics</h1>
            </div>
            <div className="class_title"><h1>Welcome EPL fan</h1></div>
            <Route path="/" component={this.renderComponent(Main)}/>
            <Route path="/LeagueTable" component={League}/>
            <Route path="/Goals" component={Goals}/>
            <Route path="/Assists" component={Assists}/>
            <Route path="/Cards" component={Cards}/>
          </div>
        </Router>
      </div>
  );
  }
}

export default App;