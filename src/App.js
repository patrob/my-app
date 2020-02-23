import React from 'react';
import patrick from './assets/patrick.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={patrick} className="mugshot" alt="Patrick Robinson" />
        <p>Patrick Robinson - Software Engineer</p>
        <table className="contact-info">
          <tr>
            <td>Email:</td>
            <td><a href="mailto:patrob@gmail.com">patrob@gmail.com</a></td>
          </tr>
          <tr>
            <td>Location:</td>
            <td>San Antonio, TX</td>
          </tr>
          <tr>
            <td>GitHub:</td>
            <td><a href="https://github.com/patrob">https://github.com/patrob</a></td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
