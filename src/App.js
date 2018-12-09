import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Main from './containers/Main/Main'
import Toast from './components/Toast/Toast'
import Library from './containers/Library/Library'

class App extends Component {
  state = {
    showToast: false,
    toastMessage: '',
    toastColor: 'blue'
  }

  showToastHandler = (message, color) => {
    this.setState({
      toastMessage: message,
      showToast: true,
      toastColor: color
    })

    setTimeout(() => {
      this.setState({
        toastMessage: '',
        showToast: false
      })
    }, 1000)
  }

  render() {
    return (
      <BrowserRouter basename='/my-youtube'>
        <div className="App">
          {this.state.showToast ? (
            <Toast color={this.state.toastColor}>
              {this.state.toastMessage}
            </Toast>
          ) : null}
          <Header />
          <br />

          <Route
            exact
            path="/"
            render={() => <Main showToast={this.showToastHandler} />}
          />
          <Route path="/library" component={Library} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
