import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splash: true
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ splash: !this.state.splash }), 3000);
  }

  render() {
    const { splash } = this.state;
    if (splash) return <Welcome />
    return (
      <h1>Sudoku</h1>
    );
  }

}
