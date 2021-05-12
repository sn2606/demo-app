import React, { Component } from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>React App</h1>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello. I\'m a react app'));
  }
}

export default App;