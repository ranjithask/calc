import React, { Component } from 'react'
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import store from './store/configureStore';
import Panel from './containers/Panel';

export default class Calculator extends Component {
  render() {
    return (
      <>
        <Panel/>
      </>
    )
  }
}

render(<Provider store={store()}><Calculator/></Provider>,document.getElementById('app'))