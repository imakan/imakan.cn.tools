import { notification } from 'antd';
import React, { Component, ErrorInfo } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import './App.css';
import Mylayout from './layouts/BasicLayout/index';
class App extends Component {
  public componentDidCatch(error: Error, info: ErrorInfo) {
    notification.error({
      message: 'something was error',
      description: info.componentStack,
      duration: 10
    });
  }
  public render() {
    return (
      <Router>
        <Mylayout
          history={window.history}
          location={window.location}
          match={window.location.pathname}
        />
      </Router>
    );
  }
}
export default App;
