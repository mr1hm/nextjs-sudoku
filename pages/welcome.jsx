import React, { Component } from 'react';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="bg-light flex-fill">
        <div className="">
          <div className="welcome d-flex justify-content-center align-items-center">
            Welcome
            <img className="ml-3" src="/images/welcome-logo.png" alt="welcome" />
          </div>
        </div>
      </div>
    );
  }
}
