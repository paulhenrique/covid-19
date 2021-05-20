import React from 'react';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="containerCards">
          {
            [1, 2, 3, 4, 5].map(e => (<Card />))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
