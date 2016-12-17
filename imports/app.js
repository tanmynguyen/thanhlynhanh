import React, {Component} from 'react';

import Header from './template/header';

class App extends Component {
	render() {
		return (
      <div className="container">
        <Header />
        <div className="main">
          {this.props.children}
        </div>
      </div>
		)
	}
}

export default App;
