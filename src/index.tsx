import * as _ from 'lodash'
import bar from './bar'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
/*
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MyAwesomeReactComponent from './MyAwesomeReactComponent'
*/
import { Hello } from './components/Hello'

function component() {
  var element = document.createElement('div')

  // lodash is required for the next line to work.
  element.innerHTML = _.join(['Hello','webpack'], ' ')

  return element
}

document.body.appendChild(component())
bar();

/*
const App: React.StatelessComponent<any> = () => (
  <MuiThemeProvider>
    <p>Hello material-ui and React</p>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
*/

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("app")
)
