import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }

  componentDidMount() {
  }

  render () {

    // This is all going to have to be done with an if test chain or a
    // swith statement. I am not familiar with the react router tool
    // that has been suggested to use here, so I'm passing over it for
    // now.

    return (<div>

    ????

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
