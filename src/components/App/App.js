import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import { ButtonTextChangeAction } from '../../actions/AppComponentButtonTextChangeAction';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { buttonText } = this.props;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Redux example
          <br />
          <h3>{buttonText}</h3>
          <br />
          <button onClick = {() => this.props.ButtonTextChangeAction()}> Click button</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    buttonText: state.AppComponentReducer.buttonText
  }
}

const mapDispatchToProps = dispatch => ({
  ButtonTextChangeAction: () => dispatch(ButtonTextChangeAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
